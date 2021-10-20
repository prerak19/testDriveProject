/** @format */

import btnStyles from './../../styles/Btn.module.css';
import SechduleContent from './../../common-component/sechduleDesc';
import StepBar from './../../components/step-bar/stepBar';
import { getBase64 } from './../../utils/base64';
import React, { useContext } from 'react';
// import imageToBase64 from 'image-to-base64';
import Axios from 'axios';
import styles from '../../styles/Home.module.css';

// import {
//   useUserData,
//   useUpdateUserData,
//   UserDataProvider,
//   UserDataContext,
// } from '../contexts/UserDataContext';
// import TestComp from '../components/test-component/testPage';

const dlUploadFront = (props) => {
  // const [imageFile, setImageFile] = React.useState(null);
  // const [image, setImage] = React.useState(null);
  // const [base64Url, setBase64Url] = React.useState('');

  const [error, setError] = React.useState(false);

  const handleFileInputChange = (file) => {
    getBase64(file)
      .then((result) => {
        // setBase64Url(result);
        props.setFrontImageBase64(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendFile = (event) => {
    // const data = new FormData();
    // data.append('name', 'front');
    // data.append('file', image);
    // Axios.post('https://httpbin.org/anything', data)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };
  return (
    <div style={{ display: `${props.currentPage === 4 ? 'block' : 'none'}` }}>
      <div className="container-fluid">
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
            <SechduleContent />
            <div className="my-5">
              <div className={styles.progressContent}>
                <StepBar activeStep="4" size="4" />
              </div>
            </div>

            {!props.imageFile1 ? (
              <>
                <div className="my-5">
                  <div className="center-content">
                    <h1>Upload Photo</h1>
                    <p>Front photo</p>
                  </div>
                </div>
                <div className="my-5">
                  <div className="choseimgSec">
                    <img src="/dlf.png" alt="" />
                  </div>
                  <div style={{ color: 'red' }} className="text-center">
                    {error ? 'Please select image type file' : ''}
                  </div>
                </div>
                <div className="btn-content reverseButtonOrder">
                  {/* <button type="button" className={styles.backBtn} onClick={() => router.push('/basicInfo')} >Browse</button> */}

                  {/* <button
                      type="buton"
                      className={styles.browseBtn}
                      onClick={() =>
                        router.push({
                          pathname: '/dlFrontView',
                          query: { image: JSON.stringify(image) },
                        })
                      }
                    >
                      BrowseNext
                    </button> */}
                  <button
                    type="button"
                    className={btnStyles.secondary}
                    onClick={() => {
                      props.previousStep();
                      props.setPreviousPage();
                      // setImage(null);
                      props.setImageFile1(null);
                      setError(false);
                    }}
                  >
                    Back
                  </button>
                  <button className={`${btnStyles.primary} btn-file`}>
                    Upload{' '}
                    <input
                      type="file"
                      accept="image/x-png,image/gif,image/jpeg"
                      onChange={(e) => {
                        if (
                          e.target.files[0] &&
                          e.target.files[0].name &&
                          !e.target.files[0].name.match(/.(jpg|jpeg|png|gif)$/i)
                        ) {
                          console.log('not a valid image');
                          setError(true);
                        } else if (
                          e.target.files[0] &&
                          e.target.files[0].name
                        ) {
                          props.setImageFile1(
                            URL.createObjectURL(e.target.files[0])
                          );
                          handleFileInputChange(e.target.files[0]);
                        }
                      }}
                    />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="my-2">
                  <div className="text-heading">Front Photo</div>
                </div>
                <div className="choseimgSec1">
                  <img
                    src={props.imageFile1}
                    height="100%"
                    border-radius="20px"
                  />
                </div>

                <div className="btn-content reverseButtonOrder">
                  <button
                    type="button"
                    className={btnStyles.secondary}
                    onClick={() => {
                      props.previousStep();
                      props.setPreviousPage();
                      // setImage(null);
                      props.setImageFile1(null);
                      setError(false);
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className={btnStyles.primary}
                    onClick={() => {
                      // sendFile();
                      props.setNextPage();
                      props.nextStep();
                      setError(false);
                    }}
                  >
                    Accept
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default dlUploadFront;
