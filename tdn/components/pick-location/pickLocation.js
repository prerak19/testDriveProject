/** @format */
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import btnStyles from './../../styles/Btn.module.css';
import SechduleContent from './../../common-component/sechduleDesc';
import StepBar from './../../components/step-bar/stepBar';
import StepBarV1 from './../../components/step-bar/stepBarV1';
import StepbarV1Style from './../../styles/StepBarV1.module.css';

import { useCarData, useUpdateCarData } from './../../contexts/CarDataContext';
import Axios from 'axios';
import { resolveHref } from 'next/dist/next-server/lib/router/router';

const pickLocation = (props) => {
  const [isSelected, setisSelected] = useState(false);
  const [rooftops, setRooftops] = useState([]);
  const [rooftopCars, setRooftopCars] = useState([]);
  const [locationDealer, setlocationDealer] = useState(true);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [userData, setUserData] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
  });
  const [error, setError] = useState({
    address: false,
    city: false,
    state: false,
    zip: false,
  });
  // const { rooftopData } = props;
  // const selectedCar = useCarData();
  const { selectedCarData } = props;
  useEffect(() => {
    props.scrollToTop();
  }, [props.isActive]);

  // const getCarData = () => {};

  useEffect(() => {
    if (props.isActive === true) {
      Axios.get(`/api/getRooftops`).then(
        (response) => {
          setRooftops(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [props.isActive]);

  const validateForm = () => {
    let validation = true;
    let error = {
      address: false,
      city: false,
      state: false,
      zip: false,
    };

    if (userData.address.length < 3) {
      validation = false;
      error.address = true;
    }
    if (userData.city.length < 2) {
      validation = false;
      error.city = true;
    }
    if (userData.state.length < 2) {
      validation = false;
      error.state = true;
    }
    if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(userData.zip)) {
      validation = false;
      error.zip = true;
    }
    setError(error);
    return validation;
  };

  const handleChange = (e) => {
    const newData = {
      ...userData,
      [e.target.name]: e.target.value,
    };
    setUserData(newData);
    // data({ userData: newData });
    setError({
      ...error,
      [e.target.name]: false,
    });
  };

  const setLocalUserData = (e) => {
    e.preventDefault();
    const { address, city, state, zip } = userData;
    const driveForm = localStorage.getItem('driveForm');
    let dupDriveForm = JSON.parse(driveForm);
    Axios.post('/api/user/updateLocation', {
      UserID: localStorage.getItem('userId'),
      Address: `${address}, ${city}, ${state} - ${zip} `,
      AtHome: !locationDealer,
    })
      .then((res) => {
        if (res.data) {
          let obj = {
            ...dupDriveForm,
            address: `${address}, ${city}, ${state} - ${zip} `,
            atHome: !locationDealer,
          };
          localStorage.setItem('driveForm', JSON.stringify(obj));
          setBtnDisabled(false);
          props.setNextPage();
          props.nextStep();
        }
      })
      .catch((err) => console.log(err));
  };

  const getCarData = async (id) => {
    try {
      let data = {};
      await Axios.get(`/api/get-car/${id}`).then(
        (response) => {
          data = response.data;
        },
        (error) => {
          console.log(error);
        }
      );
      return data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useEffect(async () => {
    if (
      props.isActive == true &&
      props.rooftopData &&
      props.rooftopData.fields &&
      props.rooftopData.fields.Cars
    ) {
      let newCars = [];
      for (let i = 0; i < props.rooftopData.fields.Cars.length; i++) {
        let data = await getCarData(props.rooftopData.fields.Cars[i]);
        newCars.push(data);
        if (i >= 2) {
          break;
        }
      }
      setRooftopCars(newCars);
    }
  }, [props.rooftopData, props.isActive]);

  return (
    <div style={{ display: `${props.currentPage === 3 ? 'block' : 'none'}` }}>
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
          <div className="col-sm-12 col-md-7 col-lg-7 min-width-desktop">
            <SechduleContent />
            <div className={`${styles.progressContent}  my-5`}>
              {/* <StepBar activeStep="3" size="4" /> */}
              <div className={StepbarV1Style.hideForMobile}>
                <StepBarV1 {...props} />
              </div>
              <div className={StepbarV1Style.hideForLaptop}>
                <StepBarV1 mobile={true} {...props} />
              </div>
            </div>

            <div className="my-4">
              <div className="pick-location-desc">
                <h2>I want to Pickup Location</h2>
              </div>
            </div>
            <div className="">
              <div className="">
                <div className="tab_container">
                  <div className="button_Tab">
                    {/* <ul>
                      <li className="active">
                        <a href="javascript:void(0)"> Dealership</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)"> Home</a>
                      </li>
                    </ul> */}

                    <button
                      type="button"
                      className={locationDealer ? 'active' : ''}
                      onClick={() => {
                        if (locationDealer) return;
                        setlocationDealer(true);
                      }}
                    >
                      Dealership
                    </button>
                    <button
                      type="button"
                      className={locationDealer ? '' : 'active'}
                      onClick={() => {
                        if (!locationDealer) return;
                        setlocationDealer(false);
                      }}
                    >
                      Home
                    </button>
                    {/* <button type="button" className="active">
                      Work
                    </button> */}
                  </div>
                </div>
                {/* dealership tab  */}

                {locationDealer ? (
                  <div className="dealershipContent">
                    <div>
                      <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                          <div className="mapContent">
                            {/* <img src="/map.png" alt="" /> */}
                            <iframe
                              className="confirmMap"
                              src={
                                props.rooftopData &&
                                props.rooftopData.fields &&
                                props.rooftopData.fields.Geolocation
                              }
                              frameBorder="0"
                              allowFullScreen=""
                              aria-hidden="false"
                              tabIndex="0"
                              width="100%"
                              height="220px"
                            ></iframe>
                          </div>
                        </div>

                        <div className="col-sm-12 col-md-8 col-lg-8">
                          <div className="row">
                            {rooftopCars && rooftopCars[0] ? (
                              rooftopCars.map((car) => (
                                <>
                                  {' '}
                                  <div className="col-sm-12 col-md-4 col-lg-4 p-0 displaynone">
                                    <Image
                                      className="pickLocationImg"
                                      src={
                                        car.fields.Image[0].thumbnails.large.url
                                      }
                                      alt=""
                                      width={250}
                                      height={150}
                                      layout="responsive"
                                    />
                                  </div>
                                </>
                              ))
                            ) : (
                              <>
                                <div className="col-sm-12 col-md-4 col-lg-4 p-0 displaynone">
                                  Loading . . .
                                </div>
                              </>
                            )}
                          </div>
                          <div className="dealarDesc">
                            <h2>
                              {props.rooftopData &&
                                props.rooftopData.fields &&
                                props.rooftopData.fields.Name}
                            </h2>
                            <p>
                              {props.rooftopData &&
                                props.rooftopData.fields &&
                                props.rooftopData.fields.Address}
                            </p>
                          </div>
                        </div>

                        {/* <div className="col-sm-12 col-md-3 col-lg-3">
                          <button
                            className={
                              isSelected
                                ? styles.selectedCarBtn
                                : styles.chooseBTn
                            }
                            type="button"
                            onClick={() => {
                              setisSelected(!isSelected);
                            }}
                          >
                            {isSelected ? 'Selected' : 'Choose'}
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="HomeContent">
                    <div className="homeLocationForm">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Address line "
                              id="Addressline "
                              name="address"
                              onChange={handleChange}
                              required
                              value={userData.address}
                              style={{
                                background: error.address ? '#FFF1F1' : '',
                                border: error.address
                                  ? '1px solid #FA6767'
                                  : '',
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="City "
                              id="city"
                              name="city"
                              required
                              value={userData.city}
                              onChange={handleChange}
                              style={{
                                background: error.city ? '#FFF1F1' : '',
                                border: error.city ? '1px solid #FA6767' : '',
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="State "
                              id="state"
                              name="state"
                              required
                              value={userData.state}
                              onChange={handleChange}
                              style={{
                                background: error.state ? '#FFF1F1' : '',
                                border: error.state ? '1px solid #FA6767' : '',
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <input
                              type="number"
                              className="form-control zipcode"
                              placeholder="Zip Code"
                              id="zip"
                              name="zip"
                              required
                              value={userData.zip}
                              onChange={handleChange}
                              style={{
                                background: error.zip ? '#FFF1F1' : '',
                                border: error.zip ? '1px solid #FA6767' : '',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* <iframe
                        className="confirmMap"
                        src={`https://maps.google.com/maps?q=${escape(
                          userData.address +
                            ' ' +
                            userData.city +
                            ' ' +
                            userData.state +
                            ' ' +
                            userData.zip
                        )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                        width="600"
                        height="420"
                        frameBorder="0"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                      ></iframe> */}
                    </div>
                  </div>
                )}

                {/*  */}

                {/* Home Tab  */}
              </div>
            </div>

            <div className="relativepos">
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
                  //   isSelected ? btnStyles.primary : btnStyles.primaryDisabled
                  // }
                  // onClick={() => {
                  //   props.setNextPage();
                  //   props.nextStep();
                  // }}
                  // disabled={!isSelected}
                  className={btnStyles.primary}
                  onClick={(e) => {
                    if (!locationDealer && validateForm()) {
                      setBtnDisabled(true);
                      setLocalUserData(e);
                    } else if (locationDealer) {
                      setLocalUserData(e);
                    }
                  }}
                  disabled={btnDisabled}
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
export default pickLocation;
