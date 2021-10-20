/** @format */

import styles from '../../styles/Home.module.css';

import btnStyles from './../../styles/Btn.module.css';
import Axios from 'axios';
import moment from 'moment';
import React, { useContext } from 'react';
import {
  useUserData,
  useUpdateUserData,
  UserDataProvider,
  UserDataContext,
} from '../../contexts/UserDataContext';

import CalendlyButton from './calendly';

const ConfirmTestDrive = (props) => {
  const data = useUserData();

  const [calendlyButtonDisable, setCalendlyButtonDisable] = React.useState(
    true
  );
  const [calendlyPrefill, setCalendlyPrefill] = React.useState({
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

  const sendTextMessage = (userData) => {
    console.log('got data in ', userData);
    const textMessageData = {
      firstName: userData.fields.FirstName,
      lastName: userData.fields.LastName,
      date: userData.fields.Date,
      phone: userData.fields.Phone,
    };
    Axios.post('/api/sendTextMessage', textMessageData)
      .then((res) => {
        console.log('sent text message ', res.data);
        localStorage.clear();
      })
      .catch((err) => console.log(err));
  };

  const sendConfirmationMessage = async (userId) => {
    console.log({ userId });
    let userData;
    try {
      userData = await Axios.get(`/api/user/get-user/${userId}`);
    } catch (err) {
      console.log(err);
    }
    console.log(userData.data);
    if (
      userData.data &&
      userData.data.fields &&
      userData.data.fields.CommunicationMethod === 'Text'
    ) {
      sendTextMessage(userData.data);
    } else {
      localStorage.clear();
    }
  };
  const getPrefillData = async (userId) => {
    console.log({ userId });
    let userData;
    try {
      userData = await Axios.get(`/api/user/get-user/${userId}`);
      const rooftopData = await Axios.get(`/api/get-rooftop/${props.rt}`);
      setCalendlyPrefill({
        email: userData.data.fields.Email,
        firstName: userData.data.fields.FirstName,
        lastName: userData.data.fields.LastName,
        location:
          rooftopData.data &&
          rooftopData.data.fields &&
          rooftopData.data.fields.Name,
        customAnswers: {
          a2: userData.data.fields.Phone,
        },
      });
      setCalendlyButtonDisable(false);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    props.scrollToTop();
    getPrefillData(localStorage.getItem('userId'));
  }, [props.isActive]);

  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedTime, setSelectedTime] = React.useState('');

  React.useEffect(() => {
    function isCalendlyEvent(e) {
      return e.data.event && e.data.event.indexOf('calendly') === 0;
    }
    window.addEventListener('message', function (e) {
      if (isCalendlyEvent(e)) {
        console.log('props user data', props.userDataState);
        if (e.data.event === 'calendly.event_scheduled') {
          console.log('event scheduled ');
          sendConfirmationMessage(localStorage.getItem('userId'));
          props.setThisPage(8);
          props.nextStep();
        }
      }
    });
  }, []);
  const base = 'https://calendly.com/dev-124/test-drive/';
  const [calendlyUrl, setCalendlyUrl] = React.useState('');

  const pageSettings = {
    backgroundColor: 'ffffff',
    hideEventTypeDetails: true,
    hideLandingPageDetails: true,
  };

  const prefill = {
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
  };
  React.useEffect(() => {
    const month = moment(props.selectedDateTime).format('YYYY-MM');
    const date = moment(props.selectedDateTime).format('YYYY-MM-DD');
    setCalendlyUrl(
      `${base}${props.selectedDateTime}?month=${month}&date=${date}`
    );
  }, [props.selectedDateTime]);

  React.useEffect(() => {
    const dateObj = new Date(props.selectedDateTime);
    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let dateString = ` ${days[dateObj.getDay()]},  ${dateObj.toLocaleString(
      'default',
      {
        month: 'long',
      }
    )} ${dateObj.getDate()}    `;
    setSelectedDate(dateString);
    setSelectedTime(
      dateObj.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
    );
  }, [props.isActive]);

  return (
    <div style={{ display: `${props.currentPage === 7 ? 'block' : 'none'}` }}>
      <div className="container-fluid bggray d-flex justify-content-center height100vh">
        <div className="bgwhite centerDiv1">
          <h1 className="confirm-heading">Confirm your Test Drive</h1>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 displaynone">
              <div className="marTopBot20">
                <iframe
                  className="confirmMap"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48320.39666380446!2d-73.965441!3d40.805449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f63c75af2d65%3A0xf45542f6cb090cc9!2s2880%20Broadway%2C%20New%20York%2C%20NY%2010025!5e0!3m2!1sen!2sus!4v1612769808702!5m2!1sen!2sus"
                  width="600"
                  height="310"
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
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="row">
                <div className="col-4 padding7">
                  <div className="picCard">
                    <img
                      src={
                        props.selectedCarData &&
                        props.selectedCarData.fields &&
                        props.selectedCarData.fields.Image[0].url
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-4 padding7">
                  <div className="picCard">
                    <img
                      src={
                        props.selectedCarData &&
                        props.selectedCarData.fields &&
                        props.selectedCarData.fields.Image[0].url
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-4 padding7">
                  <div className="picCard">
                    <img
                      src={
                        props.selectedCarData &&
                        props.selectedCarData.fields &&
                        props.selectedCarData.fields.Image[0].url
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="mapAddress">
                <p>Dealer Chinatown</p>
                <p>
                  Canal Street to Bayard Street, New York City, NY <br></br>
                  10013
                </p>
              </div>
              <div className="viewDate">
                <select
                  className=""
                  id="sel1"
                  // defaultValue="Tuesday, February 28"
                  // value="Tuesday, February 28</option"
                >
                  <option defaultValue={selectedDate} className="optionHide">
                    {selectedDate}
                  </option>
                </select>
                <p>{selectedTime}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              {/* <div className="relativepos">
                <div className="infoText mt-5">
                  <p>*you can change your appointment time if needed</p>
                </div>
            </div> */}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              {/* <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Send me reminders
              </label>
            </div> */}

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
                  <CalendlyButton
                    url={calendlyUrl}
                    prefill={calendlyPrefill}
                    pageSettings={pageSettings}
                    disable={calendlyButtonDisable}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmTestDrive;
