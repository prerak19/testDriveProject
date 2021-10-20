/** @format */
import Image from 'next/image';
import btnStyles from './../../styles/Btn.module.css';
import Axios from 'axios';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useUserData } from '../../contexts/UserDataContext';
import FontAwesome from 'react-fontawesome';

const ConfirmTestDrive = (props) => {
  const data = useUserData();

  const [loading, setLoading] = useState(false);

  const [address, setAddress] = useState({ address: '', location: '' });

  // const sendTextMessage = (userData) => {
  //   const textMessageData = {
  //     firstName: userData.fields.FirstName,
  //     lastName: userData.fields.LastName,
  //     date: userData.fields.Date,
  //     phone: userData.fields.Phone,
  //   };
  //   Axios.post('/api/sendTextMessage', textMessageData)
  //     .then((res) => {
  //       console.log('sent text message ', res.data);
  //       localStorage.clear();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       localStorage.clear();
  //     });
  // };

  const sendConfirmationMessage = async (
    userId = localStorage.getItem('userId')
  ) => {
    setLoading(true);
    let userData;
    try {
      userData = await Axios.get(`/api/user/get-user/${userId}`);
      // console.log(userData.data);
      createEvent(userData.data);
    } catch (err) {
      console.log(err);
    }
    // if (userData.data && userData.data.fields) {
    //   createEvent(userData.data);
    // }
  };
  const createEvent = async (userData) => {
    try {
      const rooftopData = await Axios.get(`/api/get-rooftop/${props.rt}`);
      const carData = await Axios.get(
        `/api/get-car/${localStorage.getItem('carId')}`
      );
      const dealerData = await Axios.get(
        `/api/get-dealership/${rooftopData.data.fields['Dealership Group'][0]}`
      );

      const location =
        userData.fields &&
        userData.fields['At Home'] &&
        userData.fields['At Home'] === true
          ? userData.fields.Address
          : rooftopData.data.fields.Address;

      let dateVal = Math.floor(new Date().getTime() / 1000.0);
      let date = moment.unix(dateVal);
      let dateEpoch = date.tz(rooftopData.data.fields.Timezone).unix();

      let userSelectedDate = moment(new Date(userData.fields.Date));
      let selectedDateEpoch = userSelectedDate
        .tz(rooftopData.data.fields.Timezone)
        .unix()
        .toString();

      let currentTimeDifference = Math.floor(
        (selectedDateEpoch - dateEpoch) / 60
      ).toString();

      // console.log(
      //   'log date FE ',
      //   typeof dateEpoch,
      //   typeof selectedDateEpoch,
      //   typeof currentTimeDifference
      // );

      const setEvent = await Axios.post('/api/user/createEvent', {
        location,
        userData,
        carData: carData.data,
        rooftopData: rooftopData.data,
        dealerData,
        selectedTime,
        selectedDate,
        currentTimeDifference,
        selectedDateEpoch,
      });

      // const setEvent = await Axios.post('/api/user/nylusTest', {
      //   location,
      //   userData,
      //   carData: carData.data,
      //   rooftopData: rooftopData.data,
      //   dealerData,
      //   selectedTime,
      //   selectedDate,
      // });
      setLoading(false);
      props.setThisPage(9);
      props.nextStep();
    } catch (err) {
      console.log('error log', err);
      setLoading(false);
    }
  };

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    const driveForm = localStorage.getItem('driveForm');
    let dupDriveForm = JSON.parse(driveForm);
    if (dupDriveForm) {
      let timeSlot = moment(props.selectedDateTime)
        .tz(dupDriveForm.timeZone)
        .format('LT');
      let date = moment(props.selectedDateTime).format('dddd, MMMM DD');
      if (date) {
        setSelectedDate(date);
      }
      if (timeSlot) {
        setSelectedTime(timeSlot);
      }
    }
    if (props.isActive) {
      const driveForm = localStorage.getItem('driveForm');
      let dupDriveForm = JSON.parse(driveForm);
      if (dupDriveForm.atHome) {
        setAddress({ location: 'At Home', address: dupDriveForm.address });
      } else {
        setAddress({
          location:
            props.rooftopData &&
            props.rooftopData.fields &&
            props.rooftopData.fields.Name,
          address:
            props.rooftopData &&
            props.rooftopData.fields &&
            props.rooftopData.fields.Address,
        });
      }
    }
  }, [props.isActive]);

  return (
    <div style={{ display: `${props.currentPage === 8 ? 'block' : 'none'}` }}>
      <div className="container-fluid bggray d-flex justify-content-center height100vh overflow-auto">
        <div className="bgwhite centerDiv1">
          <div>
            <h1 className="confirm-heading">Confirm your Test Drive</h1>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 displaynone">
                <div>
                  <iframe
                    className="confirmMap"
                    src={
                      address.location === 'At Home'
                        ? `https://maps.google.com/maps?q=${escape(
                            address.address
                          )}&t=&z=13&ie=UTF8&iwloc=&output=embed`
                        : props.rooftopData &&
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
                      style={{ borderRadius: '20px' }}
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
                  <p>{address && address.location}</p>
                  <p>{address && address.address}</p>
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
                    props.setThisPage(4);
                    props.setSomethingWrong(false);

                    props.goToStep(4);
                  }}
                >
                  Back
                </button>
                <button
                  type="button"
                  className={btnStyles.primary}
                  onClick={() => sendConfirmationMessage()}
                  disabled={loading}
                >
                  {loading ? (
                    <FontAwesome name="fas fa-spinner fa-pulse" spin />
                  ) : (
                    'Continue'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmTestDrive;
