import styles from '../../styles/Home.module.css';

import btnStyles from './../../styles/Btn.module.css';
import SechduleContent from './../../common-component/sechduleDesc';
import StepBar from './../../components/step-bar/stepBar';
const uploadDl = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-5 hideContent">
            <img
              className="d-block w-100"
              className={styles.imageborder}
              src="/carDriving.png"
              alt="Picture of the car"
            />
        </div>
        <div className="col-sm-12 col-md-7 col-lg-7">
          <SechduleContent />
          <div className="my-5">
            <div className={styles.progressContent}>
              <StepBar activeStep="4" size="4" />
            </div>
          </div>

            <div className="my-5">
              <div className="center-content">
                <h1>Driver’s License</h1>
                <p>Please upload drivers license photos </p>
              </div>
            </div>
            <div className="my-5">
              <div className="licenceBtnContent ">
                <div className="licenceBtn">
                  <div className="uploadDlsct">
                    {/* <button type="button">1</button> */}
                    <div className="choseimgSec">
                      <img src="/part1.png" alt="" />
                    </div>
                  </div>

                  <div className="uploadDlsct">
                    {/* <button type="button">2</button> */}
                    <div className="choseimgSec">
                      <img src="/part2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="btn-content reverseButtonOrder">
                <button
                  type="button"
                  className={btnStyles.secondary}
                  onClick={() => props.previousStep()}
                >
                  Back
                </button>
                <button
                  type="button"
                  className={btnStyles.primary}
                  onClick={() => props.nextStep()}
                >
                  Continue
                </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default uploadDl;
