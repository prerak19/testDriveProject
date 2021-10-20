import styles from './../../styles/setDrive.module.css';
import React, { useEffect, useState } from 'react';
import btnStyles from './../../styles/Btn.module.css';
import Setcardrive from './../../common-component/setCarslider';
import { useUserData } from '../../contexts/UserDataContext';
import { useDateTimeData } from '../../contexts/DateTimeDataContext';
import Head from 'next/head';
import Axios from 'axios';
import { InlineWidget, openPopupWidget, PopupWidget } from 'react-calendly';
import CustomButton from './calendly';

const setYourDrive = (props) => {
  const [calendarDate, setCalendarDate] = useState(false);
  useEffect(() => {
    props.scrollToTop();
  }, [props.isActive]);

  const base = 'https://calendly.com/algoscale-test/test-drive-ninja/';

  let data = useUserData();
  let userData = data && data.userData;
  let dateTime = useDateTimeData();
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [brand, setBrand] = useState('');
  const [calendlyUrl, setCalendlyUrl] = useState('');

  const pageSettings = {
    backgroundColor: 'ffffff',
    hideEventTypeDetails: true,
    hideLandingPageDetails: true,
  };
  const calendlyStyles = {
    height: '100%',
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

  useEffect(() => {
    const dateObj = new Date(props.selectedDateTime);
    setCalendlyUrl(
      `${base}${props.selectedDateTime}?month=${dateObj.getFullYear()}-${
        dateObj.getMonth() < 10 ? 0 : ''
      }${dateObj.getMonth() + 1}${'&date='}${
        String(props.selectedDateTime).split('T')[0]
      }`
    );
  }, [props.selectedDateTime]);

  useEffect(() => {
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

    let dateString = `${dateObj.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })}, ${days[dateObj.getDay()]}, ${dateObj.toLocaleString('default', {
      month: 'short',
    })} ${dateObj.getDate()}`;
    setSelectedDateTime(dateString);
  }, [props.isActive]);

  useEffect(() => {
    let brandName = '';
    if (
      props.isActive === true &&
      props.selectedCarData &&
      props.selectedCarData.fields
    ) {
      Axios.get(`/api/get-brand/${props.selectedCarData.fields.Brand[0]}`).then(
        (response) => {
          brandName = response.data.fields.Name;
          setBrand(brandName);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [props.isActive]);

  const addToCalender = () => {
    var gapi = window.gapi;
    var CLIENT_ID =
      '930627695734-ru0p2hn5nnforcdn4ee2lt0qjgd3bl2n.apps.googleusercontent.com';
    var API_KEY = 'AIzaSyCrd0MTaRwaQENF5J4Alw2wPtcqGI5q8G0';
    var DISCOVERY_DOCS = [
      'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
    ];
    var SCOPES = 'https://www.googleapis.com/auth/calendar.events';
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      window.gapi.auth2
        .init({
          client_id: CLIENT_ID,
          scope: SCOPES,
        })
        .then(function (a, b) {
          window.gapi.auth2.getAuthInstance().isSignedIn.listen((signedIn) => {
            console.log(signedIn);
          });
          window.gapi.auth2.getAuthInstance().currentUser.listen((user) => {
            console.log(user);
          });
          var event = {
            summary: 'Test Drive Details',
            location: '800 Howard St., San Francisco, CA 94103',
            description: props.rooftopData && props.rooftopData.fields.Name,
            start: {
              dateTime: dateTime,
              timeZone: 'America/Los_Angeles',
            },
            end: {
              dateTime: new Date(new Date(dateTime).getTime() + 30 * 60000),
              timeZone: 'America/Los_Angeles',
            },
            recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
            attendees: [
              { email: props.rooftopData && props.rooftopData.fields.Email },
              { email: userData.email },
            ],
            reminders: {
              useDefault: false,
              overrides: [
                { method: 'email', minutes: 24 * 60 },
                { method: 'popup', minutes: 10 },
              ],
            },
          };

          var request = gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: event,
            sendUpdates: 'all',
          });

          request.execute((event) => {
            setCalendarDate(true);
            // window.open(event.htmlLink)
          });
        });
    });
  };
  return (
    <div style={{ display: `${props.currentPage === 8 ? 'block' : 'none'}` }}>
      <Head>
        <script
          src="https://apis.google.com/js/api.js"
          type="text/javascript"
        ></script>
      </Head>
      <div className="container-fluid bggray d-flex justify-content-center height100vh">
        <div className="bgwhite centerDiv1">
          <div className="pt-5 bgwhite" style={{ borderRadius: '30px' }}>
            <div className={styles.setdriveheading}>
              <h1>You’re all set! See you soon.</h1>
              <p>Please check your email!</p>
            </div>
            <div className="marTopBot20 text-center">
              <img
                src={
                  props.selectedCarData &&
                  props.selectedCarData.fields &&
                  props.selectedCarData.fields.Image[0].url
                }
                className={styles.testDriveImage}
              />
              {/* <Setcardrive selectedCarData={props.selectedCarData} /> */}
            </div>
            <div className="py-4 anotherVehicle">
              <div className={styles.setdriveDesc}>
                <h4>
                  {brand}
                  {` `}
                  {props.selectedCarData &&
                    props.selectedCarData.fields &&
                    props.selectedCarData.fields.Name}
                </h4>
                <p>My test drive will be:</p>
                <h3>{selectedDateTime}</h3>
              </div>
              <div className="relativepos">
                <div className={styles.addcalender}>
                  {/* <button
                    type="button"
                    className={btnStyles.secondary}
                    onClick={addToCalender}
                  >
                    {calendarDate ? 'Added' : 'Add'} to Calendar
                  </button> */}
                  {}
                  {/* <button
                    type="button"
                    className={btnStyles.primary}
                    onClick={() => {
                      props.goToStep(1);
                      props.setInitialPage();
                    }}
                  >
                    Add Another Vehicle
              </button> */}
                  {/* <InlineWidget
                    url={calendlyUrl}
                    pageSettings={{
                      backgroundColor: 'ffffff',
                      hideEventTypeDetails: true,
                      hideLandingPageDetails: true,
                    }}
                    styles={{
                      height: '100%',
                    }}
                  /> */}
                  {/* <PopupWidget /> */}
                  {/* <button onClick={openCalendly}>Custom Button</button>; */}
                  {/* <CustomButton
                    url={calendlyUrl}
                    prefill={prefill}
                    pageSettings={pageSettings}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default setYourDrive;
