import styles from '../../styles/Home.module.css';

import btnStyles from './../../styles/Btn.module.css';
import SechduleContent from './../../common-component/sechduleDesc';
import StepBar from './../../components/step-bar/stepBar';
import React, { useState } from 'react';
import Axios from 'axios';

const dlVerify = (props) => {
  const verifyDlData = () => {
    Axios.post('/api/verify/dl', {
      frontBase64: props.frontImageBase64,
      backBase64: props.backImageBase64,
    })
      .then((res) => {
        console.log({ res });
        if (
          parseFloat(res.data.matchrate) >= 0.6 &&
          res.data.result.documentSide === 'DUAL' &&
          res.data.result.issuerOrg_iso3 === 'USA' &&
          res.data.result.documentType === 'D'
        ) {
          verificationData(res.data.vaultid);
          props.setNextPage();
          props.nextStep();
        } else {
          props.setSomethingWrong(true);
        }
      })
      .catch((err) => {
        props.setSomethingWrong(true);
        console.log(err);
      });
  };

  const verificationData = (vaultId) => {
    console.log('in verfication api');
    if (vaultId) {
      console.log(' correct verifications ');
      Axios.post('/api/user/updateVerificationStatus', {
        UserID: localStorage.getItem('userId'),
        IDVerified: true,
        IDVerificationToken: vaultId,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  React.useEffect(async () => {
    if (props.isActive == true) {
      await verifyDlData();
    }
  }, [props.isActive]);

  React.useEffect(() => {
    console.log('verifying status changed ', props.verifying);
  }, [props.verifying]);

  return (
    <div style={{ display: `${props.currentPage === 6 ? 'block' : 'none'}` }}>
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
          <div className="col-sm-12 col-md-7 col-lg-7">
            <div>
              <SechduleContent />
            </div>
            <div className={`${styles.progressContent} my-5`}>
              <StepBar activeStep="4" size="4" />
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
                    <h1>Soemthing went wrong . . .</h1>
                    <p>Please go back and upload Driver's License again</p>
                    <div className="btn-content">
                      <button
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
                      </button>
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
