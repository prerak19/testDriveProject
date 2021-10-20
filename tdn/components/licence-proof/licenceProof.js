/** @format */

import styles from "../../styles/Home.module.css";

import btnStyles from "./../../styles/Btn.module.css";
import SechduleContent from "./../../common-component/sechduleDesc";
import StepBar from "./../../components/step-bar/stepBar";
import StepBarV1 from "./../../components/step-bar/stepBarV1";
import StepbarV1Style from "./../../styles/StepBarV1.module.css";

const licenceProof = (props) => {
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
          <div className="marTopBot20">
            <div className={styles.progressContent}>
              {/* <StepBar activeStep="5" size="4" /> */}
              <div className={StepbarV1Style.hideForMobile}>
                <StepBarV1 {...props}/>
              </div>
              <div className={StepbarV1Style.hideForLaptop}>
                <StepBarV1 mobile={true} {...props}/>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="center-content">
              <h1>Pictures of Driver's License</h1>
              <p>
                In the next step you will be asked to upload a selfie picture
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="choseimgSec">
              <img src="/l1.png" alt="" />
            </div>
          </div>

          <div className="btn-content reverseButtonOrder mt-5">
            <button
              type="button"
              className={btnStyles.secondary}
              onClick={() => {
                props.setPreviousPage();
                props.previousStep();
              }}
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
export default licenceProof;
