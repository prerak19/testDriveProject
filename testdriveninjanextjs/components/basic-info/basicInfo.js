/** @format */

import styles from "../../styles/Home.module.css";

import btnStyles from "./../../styles/Btn.module.css";
import SechduleContent from "./../../common-component/sechduleDesc";
import StepBar from "./../../components/step-bar/stepBar";
import React, { useState, useEffect } from "react";
import { useUpdateUserData } from "../../contexts/UserDataContext";
import axios from "axios";

const basicInfo = (props) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    communicationMode: "Email",
  });
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  });
  const [policyCheckBox1, setPolicyCheckBox1] = useState(false);
  const [policyCheckBox2, setPolicyCheckBox2] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  useEffect(() => {
    props.scrollToTop();
  }, [props.isActive]);

  const data = useUpdateUserData();

  const setLocalUserData = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, communicationMode } = userData;
    const driveForm = localStorage.getItem("driveForm");
    let dupDriveForm = JSON.parse(driveForm);
    axios
      .post("/api/user/updateBasic", {
        UserID: localStorage.getItem("userId"),
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Phone: phone,
        CommunicationMethod: communicationMode,
        AgreementConsent: policyCheckBox1,
        CommunicationConsent: policyCheckBox2,
      })
      .then((res) => {
        if (res.data) {
          let obj = {
            ...dupDriveForm,
            userData,
            policyCheckBox1,
            policyCheckBox2,
          };
          localStorage.setItem("driveForm", JSON.stringify(obj));
          setBtnDisabled(false);
          props.setNextPage();
          props.nextStep();
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (props.onReload) {
      const driveForm = localStorage.getItem("driveForm");
      if (driveForm) {
        let obj = JSON.parse(driveForm);
        if (obj.userData) {
          setUserData(obj.userData);
        }
        if (obj.policyCheckBox1) {
          setPolicyCheckBox1(obj.policyCheckBox1);
        }
        if (obj.policyCheckBox2) {
          setPolicyCheckBox2(obj.policyCheckBox2);
        }
      }
    }
  }, [props.onReload]);

  const validateForm = () => {
    let validation = true;
    let error = {
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      policy1: false,
      policy2: false,
    };

    if (userData.firstName.length < 3) {
      validation = false;
      error.firstName = true;
    }
    if (userData.lastName.length < 3) {
      validation = false;
      error.lastName = true;
    }
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(userData.email)) {
      validation = false;
      error.email = true;
    }
    if (userData.phone.length < 10 || userData.phone.length > 11) {
      validation = false;
      error.phone = true;
    }
    if (policyCheckBox1 === false) {
      validation = false;
      error.policy1 = true;
    }
    if (policyCheckBox2 === false) {
      validation = false;
      error.policy2 = true;
    }
    setError(error);
    return validation;
  };

  useEffect(() => {}, [userData]);

  const handleChange = (e) => {
    const newData = {
      ...userData,
      [e.target.name]: e.target.value,
    };
    setUserData(newData);
    data({ userData: newData });
    setError({
      ...error,
      [e.target.name]: false,
    });
  };

  return (
    <div style={{ display: `${props.currentPage === 3 ? "block" : "none"}` }}>
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
            <div className={`${styles.progressContent} my-5`}>
              <StepBar activeStep="3" size="4" />
            </div>
            <div className="basicInfoForm">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <div className="form-group">
                    <input
                      type="text"
                      value={userData.firstName}
                      className="form-control"
                      placeholder="First name"
                      id="firstName"
                      name="firstName"
                      required
                      onChange={handleChange}
                      style={{
                        background: error.firstName ? "#FFF1F1" : "",
                        border: error.firstName ? "1px solid #FA6767" : "",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <div className="form-group">
                    <input
                      type="text"
                      value={userData.lastName}
                      className="form-control"
                      placeholder="Last name"
                      id="lastName"
                      required
                      name="lastName"
                      onChange={handleChange}
                      style={{
                        background: error.lastName ? "#FFF1F1" : "",
                        border: error.lastName ? "1px solid #FA6767" : "",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <div className="form-group">
                    <input
                      value={userData.email}
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      style={{
                        background: error.email ? "#FFF1F1" : "",
                        border: error.email ? "1px solid #FA6767" : "",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <div className="form-group">
                    <input
                      type="number"
                      value={userData.phone}
                      className="form-control"
                      placeholder="Phone"
                      id="phone"
                      name="phone"
                      onChange={handleChange}
                      style={{
                        background: error.phone ? "#FFF1F1" : "",
                        border: error.phone ? "1px solid #FA6767" : "",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-selct">
              <div className="col-md-6 col-lg-6 col-sm-12"></div>
              <div className="col-md-6 col-lg-6 col-sm-12 d-flex">
                <div>
                  <label>Preferred Method of Communication</label>
                </div>
                <div className="w-50 text-right">
                  <select
                    className="slctText"
                    id="sel1"
                    value={userData.communicationMode}
                    onChange={handleChange}
                    name="communicationMode"
                  >
                    <option value="Email">Email</option>
                    <option value="Text">Text</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="agreeMentSection">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  onChange={() => {
                    setPolicyCheckBox1(!policyCheckBox1);
                    setError({
                      ...error,
                      ["policy1"]: false,
                    });
                  }}
                  checked={policyCheckBox1}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I have read and agree to the <span>test drive agreement</span>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  onChange={() => {
                    setError({
                      ...error,
                      ["policy2"]: false,
                    });
                    setPolicyCheckBox2(!policyCheckBox2);
                  }}
                  checked={policyCheckBox2}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  I consent to receiving communications from{" "}
                  <span>test drive agreement</span>
                </label>
              </div>
              <div className="form-check">
                {error.policy1 || error.policy2 ? (
                  <span className="policyErr">
                    Please agree the policies to continue . . .
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="relativepos marTop75">
              <div className={styles.btnSec}>
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
                  // className={
                  //   policyCheckBox1 && policyCheckBox2
                  //     ? btnStyles.primary
                  //     : btnStyles.primaryDisabled
                  // }
                  className={btnStyles.primary}
                  onClick={(e) => {
                    if (validateForm()) {
                      setBtnDisabled(true);
                      setLocalUserData(e);
                    }
                  }}
                  disabled={btnDisabled}
                  // disabled={policyCheckBox1 && policyCheckBox2 ? false : true}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default basicInfo;
