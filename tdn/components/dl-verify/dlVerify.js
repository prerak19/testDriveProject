/** @format */

import styles from '../../styles/Home.module.css';

import btnStyles from './../../styles/Btn.module.css';
import SechduleContent from './../../common-component/sechduleDesc';
import StepBar from './../../components/step-bar/stepBar';

import StepBarV1 from './../../components/step-bar/stepBarV1';
import StepbarV1Style from './../../styles/StepBarV1.module.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const dlVerify = (props) => {
  const [counter, setCounter] = useState(3);

  const verifyDlData = () => {
    const requestOne = Axios.post('/api/verify/front', {
      fileData: props.frontImageBase64,
    });
    const requestTwo = Axios.post('/api/verify/back', {
      fileData: props.backImageBase64,
    });
    Axios.all([requestOne, requestTwo])
      .then(
        Axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          if (
            parseFloat(responseOne.data.matchrate) >= 0.6 &&
            responseOne.data.result.documentSide === 'FRONT' &&
            responseOne.data.result.issuerOrg_iso3 === 'USA' &&
            responseOne.data.result.documentType === 'D' &&
            responseTwo.data.result.documentSide === 'BACK'
          ) {
            verificationData(responseOne.data.vaultid);
            props.setNextPage();
            props.nextStep();
          } else {
            verificationData();
            props.setSomethingWrong(true);
            startCounter();
            forceRedirect();
          }
        })
      )
      .catch((errors) => {
        console.log(errors);

        startCounter();
        verificationData();
        props.setSomethingWrong(true);
        forceRedirect();
      });
  };

  const forceRedirect = () => {
    setTimeout(() => {
      props.setNextPage();
      props.nextStep();
      props.setImageFile2(null);
      props.setImageFile1(null);
      props.setSomethingWrong(false);
    }, 4000);
  };

  const startCounter = () => {
    setTimeout(() => {
      setCounter(2);
      setTimeout(() => {
        setCounter(1);
        setTimeout(() => {
          setCounter(0);
          setTimeout(() => {
            setCounter(3);
          }, 3000);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  const verificationData = (vaultId) => {
    if (vaultId) {
      Axios.post('/api/user/updateVerificationStatus', {
        UserID: localStorage.getItem('userId'),
        IDVerified: true,
        IDVerificationToken: vaultId,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      Axios.post('/api/user/updateVerificationStatus', {
        UserID: localStorage.getItem('userId'),
        IDVerified: false,
        IDVerificationToken: 'failed',
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(async () => {
    if (props.isActive == true) {
      await verifyDlData();
    }
  }, [props.isActive]);

  return (
    <div style={{ display: `${props.currentPage === 7 ? 'block' : 'none'}` }}>
      <div className="container-fluid pt-10">
        <div className="row justify-content-center">
          {/* <div className="col-sm-12 col-md-5 col-lg-5 hideContent">
          <img
            className="d-block w-100"
            className={styles.imageborder}
            src="/carDriving.png"
            alt="Picture of the car"
          />
        </div> */}
          <div className="col-sm-12 col-md-7 col-lg-7 min-width-desktop">
            <div>
              <SechduleContent />
            </div>
            <div className={`${styles.progressContent} my-5`}>
              {/* <StepBar activeStep="4" size="4" /> */}
              <div className={StepbarV1Style.hideForMobile}>
                <StepBarV1 {...props} />
              </div>
              <div className={StepbarV1Style.hideForLaptop}>
                <StepBarV1 mobile={true} {...props} />
              </div>
            </div>
            <div className="loaderContentp">
              {props.somethingWrong ? (
                <></>
              ) : (
                <div className="loaderContent">
                  <div className="loader"></div>
                </div>
              )}

              <div className="verifyContent">
                {props.somethingWrong ? (
                  <>
                    <h1>Something went wrong.</h1>
                    <p>You can verify identification later.</p>
                    <p>Redirecting in {counter} seconds...</p>
                    <div className="btn-content">
                      {/* <button
                        className="btn btn-primary btn-file"
                        onClick={() => {
                          props.setImageFile2(null);
                          props.setImageFile1(null);
                          props.setThisPage(3);
                          props.setSomethingWrong(false);
                          props.goToStep(3);
                        }}
                      >
                        Back
                      </button> */}
                    </div>
                  </>
                ) : (
                  <>
                    <h1>Verifying</h1>
                    <p>
                      We are verifying your document, this will take a moment
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="btn-content">
              {/* <button type="button" className={styles.backBtn} onClick={() => router.push('/basicInfo')} >Browse</button> */}

              {/* <button type="button" className={styles.backContinue} onClick={() => router.push('/dlFrontView')}>
                        Browse
                     </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dlVerify;
