/** @format */
import Image from "next/image";
import btnStyles from "./../../styles/Btn.module.css";
import Axios from "axios";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useUserData } from "../../contexts/UserDataContext";

import FontAwesome from "react-fontawesome";

import { InlineWidget } from "react-calendly";

const ConfirmTestDrive = (props) => {
  const data = useUserData();

  const [calendlyButtonDisable, setCalendlyButtonDisable] = useState(false);
  const [disCal, setDisplayCalendly] = useState(false);
  const [calendlyPrefill, setCalendlyPrefill] = useState({
    email: data && data.userData && data.userData.email,
    firstName: data && data.userData && data.userData.firstName,
    lastName: data && data.userData && data.userData.lastName,
    location:
      props.rooftopData &&
      props.rooftopData.fields &&
      props.rooftopData.fields.Name,
    customAnswers: {
      a2: data && data.userData && data.userData.phone,
    },
  });
  const [utmPrefill, setUtmPrefill] = useState({
    utmCampaign:
      props.rooftopData &&
      props.rooftopData.fields &&
      props.rooftopData.fields.Email,
    utmContent: "",
    utmMedium:
      props.rooftopData &&
      props.rooftopData.fields &&
      props.rooftopData.fields.Phone,
    utmSource:
      props.rooftopData &&
      props.rooftopData.fields &&
      props.rooftopData.fields.Address,
    utmTerm: "Spring",
  });

  const sendTextMessage = (userData) => {
    const textMessageData = {
      firstName: userData.fields.FirstName,
      lastName: userData.fields.LastName,
      date: userData.fields.Date,
      phone: userData.fields.Phone,
    };
    Axios.post("/api/sendTextMessage", textMessageData)
      .then((res) => {
        console.log("sent text message ", res.data);
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
        localStorage.clear();
      });
  };

  const sendConfirmationMessage = async (userId) => {
    let userData;
    try {
      userData = await Axios.get(`/api/user/get-user/${userId}`);
    } catch (err) {
      console.log(err);
    }
    if (
      userData.data &&
      userData.data.fields &&
      userData.data.fields.CommunicationMethod === "Text"
    ) {
      sendTextMessage(userData.data);
    } else {
      localStorage.clear();
    }
  };
  const getPrefillData = async (userId = localStorage.getItem("userId")) => {
    setCalendlyButtonDisable(true);
    let userData;
    try {
      userData = await Axios.get(`/api/user/get-user/${userId}`);
      const rooftopData = await Axios.get(`/api/get-rooftop/${props.rt}`);
      const carData = await Axios.get(
        `/api/get-car/${localStorage.getItem("carId")}`
      );
      const dealerData = await Axios.get(
        `/api/get-dealership/${rooftopData.data.fields["Dealership Group"][0]}`
      );

      setCalendlyPrefill({
        email: userData.data.fields.Email,
        firstName: userData.data.fields.FirstName,
        lastName: userData.data.fields.LastName,
        location:
          rooftopData.data &&
          rooftopData.data.fields &&
          rooftopData.data.fields.Name,
        // phone: +17002291519,
        customAnswers: {
          a2: userData.data.fields.Phone,
          a1: 11,
          a3:
            dealerData.data &&
            dealerData.data.fields &&
            dealerData.data.fields.Name,
          a4: carData.data && carData.data.fields && carData.data.fields.Name,
          a5: 55,
          a6: 66,
          a7: 77,
          a8: 88,
          a9: 99,
          a10: "this text should not be here.",
        },
      });
      setUtmPrefill({
        utmCampaign:
          rooftopData.data &&
          rooftopData.data.fields &&
          rooftopData.data.fields.Email,
        utmContent: "",
        utmMedium:
          rooftopData.data &&
          rooftopData.data.fields &&
          rooftopData.data.fields.Phone,
        utmSource:
          rooftopData.data &&
          rooftopData.data.fields &&
          rooftopData.data.fields.Address,
        utmTerm: "",
      });
      setDisplayCalendly(true);
      setCalendlyButtonDisable(false);
    } catch (err) {
      console.log(err);
    }
  };

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    function isCalendlyEvent(e) {
      return e.data.event && e.data.event.indexOf("calendly") === 0;
    }
    window.addEventListener("message", function (e) {
      if (isCalendlyEvent(e)) {
        if (e.data.event === "calendly.event_scheduled") {
          sendConfirmationMessage(localStorage.getItem("userId"));
          setDisplayCalendly(false);
          props.setThisPage(9);
          props.nextStep();
        }
      }
    });
  }, []);
  const base = "https://calendly.com/dev-124/test-drive/";
  const [calendlyUrl, setCalendlyUrl] = useState("");

  useEffect(() => {
    const driveForm = localStorage.getItem("driveForm");
    let dupDriveForm = JSON.parse(driveForm);
    if (dupDriveForm) {
      const month = moment(props.selectedDateTime)
        .tz(dupDriveForm.timeZone)
        .format("YYYY-MM");
      const date = moment(props.selectedDateTime)
        .tz(dupDriveForm.timeZone)
        .format("YYYY-MM-DD");
      setCalendlyUrl(
        `${base}${props.selectedDateTime}?timezone=${dupDriveForm.timeZone}&month=${month}&date=${date}`
      );
    }
  }, [props.selectedDateTime]);

  useEffect(() => {
    const driveForm = localStorage.getItem("driveForm");
    let dupDriveForm = JSON.parse(driveForm);
    if (dupDriveForm) {
      let timeSlot = moment(props.selectedDateTime)
        .tz(dupDriveForm.timeZone)
        .format("LT");
      let date = moment(props.selectedDateTime).format("dddd, MMMM DD");
      if (date) {
        setSelectedDate(date);
      }
      if (timeSlot) {
        setSelectedTime(timeSlot);
      }
    }
  }, [props.isActive]);

  return (
    <div style={{ display: `${props.currentPage === 8 ? "block" : "none"}` }}>
      <div className="container-fluid bggray d-flex justify-content-center height100vh overflow-auto">
        <div className="bgwhite centerDiv1">
          {disCal === true ? (
            <div className="dFlex justify-content-center">
              <button
                className="close-button"
                onClick={() => setDisplayCalendly(false)}
              >
                {/* <span className="icon">&times;</span> */}
                {/* <span className="icon">&#129040;</span> */}
                <FontAwesome
                  className="d-flex justify-content-center"
                  name="fas fa-arrow-left"
                  style={{ padding: "0px" }}
                />
              </button>
              <InlineWidget
                url={calendlyUrl}
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: true,
                  hideLandingPageDetails: true,
                }}
                prefill={calendlyPrefill}
                pageSettings
                utm={utmPrefill}
                styles={{
                  height: "1300px",
                }}
              />
            </div>
          ) : (
            <div>
              <h1 className="confirm-heading">Confirm your Test Drive</h1>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 displaynone">
                  <div>
                    <iframe
                      className="confirmMap"
                      src={
                        props.rooftopData &&
                        props.rooftopData.fields &&
                        props.rooftopData.fields.Geolocation
                      }
                      width="600"
                      height="420"
                      frameBorder="0"
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex="0"
                    ></iframe>
                  </div>

                  {/* <div className="infoText">
              <p>*you can change your appointment time if needed</p>
            </div> */}
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 ipadView">
                  <div className="confirmCar">
                    {props.selectedCarData && props.selectedCarData.fields && (
                      <Image
                        style={{ borderRadius: "20px" }}
                        src={
                          props.selectedCarData &&
                          props.selectedCarData.fields &&
                          props.selectedCarData.fields.Image[0].url
                        }
                        alt=""
                        height={350}
                        width={600}
                        // width="100%"
                      />
                    )}
                  </div>
                  <div className="mapAddress">
                    <p>
                      {props.rooftopData &&
                        props.rooftopData.fields &&
                        props.rooftopData.fields.Name}
                    </p>
                    <p>
                      {props.rooftopData &&
                        props.rooftopData.fields &&
                        props.rooftopData.fields.Address}
                    </p>
                  </div>
                  <div className="confirmDate">
                    <div className="monthandDateContent"> {selectedDate}</div>
                    <div className="timeVIewContainer">
                      {selectedTime ? selectedTime.toLowerCase() : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="btnSecconfirm">
                <div className="flexBt">
                  <button
                    type="button"
                    className={btnStyles.secondary}
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
                  <button
                    type="button"
                    className={btnStyles.primary}
                    onClick={() => getPrefillData()}
                    disabled={calendlyButtonDisable}
                  >
                    {calendlyButtonDisable ? (
                      <FontAwesome name="fas fa-spinner fa-pulse" spin />
                    ) : (
                      "Continue"
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmTestDrive;
