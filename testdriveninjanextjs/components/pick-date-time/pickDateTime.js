/** @format */

import btnStyles from './../../styles/Btn.module.css';

import React, { useState, useEffect } from 'react';
import SechduleContent from './../../common-component/sechduleDesc';
import { InlineWidget } from 'react-calendly';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useCarData, useUpdateCarData } from './../../contexts/CarDataContext';
import styles from '../../styles/Home.module.css';
import Axios from 'axios';
import Calendar from 'react-calendar';
import moment from 'moment-timezone';
import Dropdown from './dropDown';

import StepBar from './../../components/step-bar/stepBar';
import { useUpdatedDateTimeData } from '../../contexts/DateTimeDataContext';

export default function pickDateTime(props) {
  const [carData, setCarData] = useState(null);

  const [selectedDate, onChange] = useState(new Date());
  const [time, setTime] = useState(props.selectedDateTime);
  const [calenderData, setCalenderData] = useState();
  const [brand, setBrand] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [timeZone, setTimeZone] = useState('America/New_York');

  console.log('selected car data ', props.selectedCarData);
  const timeZones = [
    { title: 'Eastern Time - US & Canada ', value: 'America/New_York' },
    { title: 'Central Time - US & Canada ', value: 'America/Chicago' },
    { title: 'Mountain Time - US & Canada ', value: 'America/Denver' },
    { title: 'Pacific Time - US & Canada ', value: 'America/Los_Angeles' },
  ];

  const data = useUpdatedDateTimeData();

  const setDateTime = (e) => {
    e.preventDefault();
    const driveForm = localStorage.getItem('driveForm');
    let dupDriveForm = JSON.parse(driveForm);
    Axios.post('/api/user/updateDate', {
      UserID: localStorage.getItem('userId'),
      Date: time,
    })
      .then((res) => {
        if (res.data) {
          let obj = { ...dupDriveForm, time, timeZone };
          localStorage.setItem('driveForm', JSON.stringify(obj));
          setBtnDisabled(false);
          props.setNextPage();
          props.nextStep();
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (props.onReload) {
      const driveForm = localStorage.getItem('driveForm');
      if (driveForm) {
        let obj = JSON.parse(driveForm);
        if (obj.time) {
          let selectedTime = obj.time;
          onChange(new Date(selectedTime));
          setTime(selectedTime);
          if (obj.timeZone) {
            setTimeZone(obj.timeZone);
          }
        }
      }
    }
    if (props.selectedCarData) {
      setCarData(props.selectedCarData);
    }
  }, [props.onReload, props.selectedCarData]);

  useEffect(() => {
    props.setSelectedDateTime(time);
  }, [time]);

  const settings = {
    showIndicators: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    showArrows: false,
    showStatus: false,
    legend: false,
    autoPlay: false,
    interval: '5000',
    infiniteLoop: true,
    transitionTime: '1000',
  };

  const getAvailableSlot = (date) => {
    let firstDay = moment(date).startOf('month').format('YYYY-MM-DD');
    let lastDay = moment(date).endOf('month').format('YYYY-MM-DD');
    Axios.get(`/api/getCalendarEvents`, {
      params: {
        firstDay,
        lastDay,
        timezone: timeZone,
      },
    }).then(
      (response) => {
        setCalenderData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getAvailableSlot(selectedDate);
  }, [timeZone]);

  useEffect(() => {
    if (props.isActive === true) {
      getAvailableSlot(selectedDate);
    }
  }, [props.isActive]);

  useEffect(() => {
    props.scrollToTop();
  }, [props.isActive]);

  useEffect(() => {
    let brandName = '';
    console.log('fetching brnds');
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
    setCarData(props.selectedCarData);
  }, [props.isActive, props.onReload, props.selectedCarData]);

  const renderImages = () => {
    return (
      <div style={{ display: `${props.currentPage === 2 ? 'block' : 'none'}` }}>
        <div className="carSlidercss">
          <div className="pickcar">
            <p>I want to drive a</p>
          </div>
          <Carousel {...settings}>
            <div>
              <img
                src={
                  carData && carData.fields
                    ? carData.fields.Image[0].thumbnails.large.url
                    : ''
                }
              />
              <p className="legend">
                {carData && carData.fields && carData.fields.Name}
              </p>
            </div>
            <div>
              <img
                src={
                  carData && carData.fields
                    ? carData.fields.Image[0].thumbnails.large.url
                    : ''
                }
              />
              <p className="legend">
                {carData && carData.fields && carData.fields.Name}
              </p>
            </div>
            <div>
              <img
                src={
                  carData && carData.fields
                    ? carData.fields.Image[0].thumbnails.large.url
                    : ''
                }
              />
              <p className="legend">
                {carData && carData.fields && carData.fields.Name}
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  };
  let totalSlots =
    calenderData &&
    calenderData.filter(
      (i) => i.date === moment(selectedDate).format('YYYY-MM-DD')
    );
  let availableSlots =
    totalSlots &&
    totalSlots[0] &&
    totalSlots[0].spots.filter((i) => i.status === 'available');

  return (
    <div style={{ display: `${props.currentPage === 2 ? 'block' : 'none'}` }}>
      <div className="container-fluid height100vh">
        <div className="hideContent">
          <div className="row justify-content-center">
            {/* <div className="col-sm-12 col-md-5 col-lg-5 height98vh">
              <div className="">{renderImages()}</div>
              <div className="pickcardesc">
                <p>
                  {brand ? (
                    <>
                      {brand}
                      {` `}
                      {carData && carData.fields
                        ? carData.fields.Name
                        : 'sample car name'}
                    </>
                  ) : (
                    'Loading . . .'
                  )}
                </p>
              </div>
            </div> */}
            <div className="col-sm-12 col-md-7 col-lg-7  min-width-desktop">
              <SechduleContent />
              <div className={`${styles.progressContent} marTopBot20`}>
                <StepBar activeStep="2" size="4" />
              </div>
              <div className="">
                {/* <InlineWidget
                  url="https://calendly.com/algoscale-test/test-drive-ninja"
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: true,
                    hideLandingPageDetails: true,
                  }}
                  styles={{
                    height: '100%',
                  }}
                /> */}

                <div className="pickContent">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-8">
                      <h6>Select a Date & Time</h6>
                      <div>
                        <Calendar
                          minDate={new Date()}
                          onChange={onChange}
                          value={selectedDate}
                          className="manualReactCalendar"
                          next2Label={null}
                          prev2Label={null}
                          calendarType="US"
                          onActiveStartDateChange={({
                            activeStartDate,
                            value,
                            view,
                          }) => getAvailableSlot(activeStartDate)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 pl-0 pr-0">
                      {/* <select
                        value={timeZone}
                        className={styles.slctPickDateTime}
                        defaultValue="America/New_York"
                        id="sel1"
                        onChange={(e) => setTimeZone(e.target.value)}
                      >
                        <option value="America/New_York">
                          Eastern Time - US & Canada (
                          {moment(new Date())
                            .tz('America/New_York')
                            .format('LT')}
                          )
                        </option>
                        <option value="America/Chicago">
                          Central Time - US & Canada (
                          {moment(new Date())
                            .tz('America/Chicago')
                            .format('LT')}
                          )
                        </option>
                        <option value="America/Denver">
                          Mountain Time - US & Canada (
                          {moment(new Date()).tz('America/Denver').format('LT')}
                          )
                        </option>
                        <option value="America/Los_Angeles">
                          Pacific Time - US & Canada (
                          {moment(new Date())
                            .tz('America/Los_Angeles')
                            .format('LT')}
                          )
                        </option>
                      </select> */}
                      <Dropdown
                        timeZones={timeZones}
                        timeZone={timeZone}
                        setTimeZone={setTimeZone}
                      />
                      <div className="timechoose">
                        <p>{moment(selectedDate).format('dddd, MMMM DD')}</p>
                        {availableSlots ? (
                          <div className="slots">
                            <ul>
                              {(availableSlots || []).map((i, key) => (
                                <li
                                  key={key}
                                  className={
                                    i.start_time === time
                                      ? 'selectedTimeContainer'
                                      : 'timeContainer'
                                  }
                                >
                                  <span
                                    style={{ fontSize: '12px' }}
                                    className={'chooseTimeElement'}
                                  >
                                    {moment(i.start_time)
                                      .tz(timeZone)
                                      .format('LT')}
                                  </span>

                                  <span
                                    style={{ fontSize: '12px' }}
                                    className={
                                      i.start_time === time
                                        ? 'selected-time'
                                        : 'chooseTime'
                                    }
                                    onClick={() => {
                                      setTime(i.start_time);
                                      data(i.start_time);
                                    }}
                                  >
                                    {i.start_time === time
                                      ? 'Selected'
                                      : 'Choose'}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <div className="text-center no-time-slot">
                            <b>
                              No times available{' '}
                              {moment(selectedDate).format('MMMM DD')}
                            </b>
                            <br />
                            <span>Please select another date</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" mt-3 relativepos">
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
                    className={
                      time !== ''
                        ? btnStyles.primary
                        : btnStyles.primaryDisabled
                    }
                    onClick={(e) => {
                      setBtnDisabled(true);
                      setDateTime(e);
                    }}
                    disabled={time === '' || btnDisabled}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* for mobile responsive content  */}
        <div className="hideForMobile">
          <div className="row ">
            <div className="col-sm-12 col-md-5 col-lg-5 ">
              <SechduleContent />
              <div className={`${styles.progressContent} marTopBot20`}>
                <StepBar activeStep="2" size="4" />
              </div>
              <div>{carData && carData.fields && renderImages()}</div>
              <div className="pickcardesc">
                <p>
                  {brand ? (
                    <>
                      {brand}
                      {` `}
                      {carData && carData.fields
                        ? carData.fields.Name
                        : 'sample car name'}
                    </>
                  ) : (
                    'Loading . . .'
                  )}
                </p>
                {/* <p>{carData && carData.fields ? carData.fields.Name : ''}</p> */}
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-7">
              <div className="marTopBot20">
                {/* <InlineWidget
                  url="https://calendly.com/algoscale-test/test-drive-ninja"
                  pageSettings={{
                    backgroundColor: "ffffff",
                    hideEventTypeDetails: true,
                    hideLandingPageDetails: true,
                  }}
                  styles={{
                    height: "600px",
                  }}
                /> */}

                <div className="pickContent">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <h6>Select a Date & Time</h6>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
                      {/* <select
                        value={timeZone}
                        className={styles.slctPickDateTime}
                        defaultValue="America/New_York"
                        id="sel1"
                        onChange={(e) => setTimeZone(e.target.value)}
                      >
                        <option value="America/New_York">
                          Eastern Time - US & Canada (
                          {moment(new Date())
                            .tz('America/New_York')
                            .format('LT')}
                          )
                        </option>
                        <option value="America/Chicago">
                          Central Time - US & Canada (
                          {moment(new Date())
                            .tz('America/Chicago')
                            .format('LT')}
                          )
                        </option>
                        <option value="America/Denver">
                          Mountain Time - US & Canada (
                          {moment(new Date()).tz('America/Denver').format('LT')}
                          )
                        </option>
                        <option value="America/Los_Angeles">
                          Pacific Time - US & Canada (
                          {moment(new Date())
                            .tz('America/Los_Angeles')
                            .format('LT')}
                          )
                        </option>
                      </select> */}

                      <Dropdown
                        timeZones={timeZones}
                        timeZone={timeZone}
                        setTimeZone={setTimeZone}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-8">
                      {/* <h6>Select a Date & Time</h6> */}
                      <div>
                        <Calendar
                          minDate={new Date()}
                          onChange={onChange}
                          value={selectedDate}
                          className="manualReactCalendar"
                          next2Label={null}
                          prev2Label={null}
                          calendarType="US"
                          onActiveStartDateChange={({
                            activeStartDate,
                            value,
                            view,
                          }) => getAvailableSlot(activeStartDate)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                      <div className="timechoose">
                        <p>{moment(selectedDate).format('dddd, MMMM DD')}</p>
                        {availableSlots ? (
                          <div className="slots">
                            <ul>
                              {(availableSlots || []).map((i, key) => (
                                <li
                                  key={key}
                                  className={
                                    i.start_time === time
                                      ? 'selectedTimeContainer'
                                      : 'timeContainer'
                                  }
                                >
                                  <span className={'chooseTimeElement'}>
                                    {moment(i.start_time)
                                      .tz(timeZone)
                                      .format('LT')}
                                  </span>

                                  <span
                                    className={
                                      i.start_time === time
                                        ? 'selected-time'
                                        : 'chooseTime'
                                    }
                                    onClick={() => setTime(i.start_time)}
                                  >
                                    {i.start_time === time
                                      ? 'Selected'
                                      : 'Choose'}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <div className="text-center no-time-slot">
                            <b>
                              No times available{' '}
                              {moment(selectedDate).format('MMMM DD')}
                            </b>
                            <br />
                            <span>Please select another date</span>
                          </div>
                        )}
                        {data && time ? (
                          <div style={{ height: '75px' }}></div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={time ? 'fixedPos' : 'relativepos'}>
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
                    className={
                      time !== ''
                        ? btnStyles.primary
                        : btnStyles.primaryDisabled
                    }
                    onClick={(e) => {
                      setBtnDisabled(true);
                      setDateTime(e);
                    }}
                    disabled={time === '' || btnDisabled}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end for mobile responsive  */}
    </div>
  );
}
