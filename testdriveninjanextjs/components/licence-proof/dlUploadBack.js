/** @format */

import btnStyles from './../../styles/Btn.module.css';
import SechduleContent from './../../common-component/sechduleDesc';
import ProgressContent from './../../common-component/stepprogress';
import StepBar from './../../components/step-bar/stepBar';
import { getBase64 } from './../../utils/base64';
import styles from '../../styles/Home.module.css';

import React from 'react';
import Axios from 'axios';

const DlUploadBack = (props) => {
  // const [image2, setImage2] = React.useState(null);

  const [error, setError] = React.useState(false);

  const handleFileInputChange = (file) => {
    getBase64(file)
      .then((result) => {
        props.setBackImageBase64(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ display: `${props.currentPage === 5 ? 'block' : 'none'}` }}>
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

            {!props.imageFile2 ? (
              <>
                <div className="my-5">
                  <div className="center-content">
                    <h1>Upload Photo</h1>
                    <p>Back photo</p>
                  </div>
                </div>
                <div className="my-5">
                  <div className="choseimgSec">
                    <img src="/dlb.png" alt="" />
                  </div>
                  <div style={{ color: 'red' }} className="text-center">
                    {error ? 'Please select image type file' : ''}
                  </div>
                </div>
                <div className="btn-content reverseButtonOrder">
                <button
                    type="button"
                    className={btnStyles.secondary}
                    onClick={() => {
                      props.previousStep();
                      props.setPreviousPage();
                      props.setImageFile2(null);
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
                          props.setImageFile2(
                            URL.createObjectURL(e.target.files[0])
                          );
                          handleFileInputChange(e.target.files[0]);
                        }
                      }}
                    />
                  </button>

                  {/* <span className="btn btn-primary btn-file" >
                  Browse <input  type="file" />

                </span> */}
                </div>
              </>
            ) : (
              <>
                <div className="my-2">
                  <div className="text-heading">Back Photo</div>
                </div>

                <div className="choseimgSec1">
                  <img
                    src={props.imageFile2}
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
                      props.setImageFile2(null);
                      setError(false);
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className={btnStyles.primary}
                    onClick={() => {
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

export default DlUploadBack;
