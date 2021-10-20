/** @format */
import Image from "next/image";
import styles from "./../../styles/Home.module.css";
import btnStyles from "./../../styles/Btn.module.css";
import Head from "next/head";
import SechduleContent from "../../common-component/sechduleDesc";
import StepBar from "./../../components/step-bar/stepBar";
import StepBarV1 from "./../../components/step-bar/stepBarV1";
import StepbarV1Style from "./../../styles/StepBarV1.module.css";
import CryptoJS from "crypto-js";
// import { minifyRecords, carsTableBase } from './api/utils/airtable';
import React, { useState, useEffect } from "react";
import Axios from "axios";

import { useCarData, useUpdateCarData } from "./../../contexts/CarDataContext";
// import { useTableData } from './../../contexts/TableDataContext';

export default function selectCar(props) {
  const [isSelected, setisSelected] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");
  const { initialCarRecords, setSelectedCarData } = props;
  const [selectedBrand, setSelectedBrand] = useState("Make");
  const [selectedModal, setSelectedModal] = useState("Modal");
  const [brands, setBrands] = useState([]);
  const [brandsInRooftop, setBrandsInRooftop] = useState([]);
  const [modals, setModals] = useState(initialCarRecords);
  const [allCars, setAllCars] = useState(initialCarRecords);
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    if (props.isActive && selectedCar && !localStorage.getItem("userId")) {
      setSelectedCar("");
    }
  }, [props.isActive]);

  useEffect(() => {
    let page = localStorage.getItem("currentPage");
    let decryptedData;
    if (page) {
      let bytes = CryptoJS.AES.decrypt(page, "SECRET_KEY");
      if (Math.sign(bytes.sigBytes) === -1 || bytes.sigBytes === 0) {
        var ciphertext = CryptoJS.AES.encrypt(`1`, "SECRET_KEY").toString();
        localStorage.setItem("currentPage", ciphertext);
      } else {
        decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
    }
    props.goToStep(decryptedData || 1);
    getCarDetails();
  }, [props.onReload]);

  const getCarDetails = () => {
    let carId = localStorage.getItem("carId");
    Axios.get(`/api/get-car/${carId}`).then(
      (response) => {
        setSelectedCar(response.data);
        props.setSelectedCarData(response.data);
        setisSelected(true);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const data = useCarData();
  const updateSelectedCarData = useUpdateCarData();
  useEffect(() => {
    props.scrollToTop();
  }, [props.isActive]);

  const getUniqueBrands = (allBrands) => {
    let availableBrands = [];
    allBrands.map((brand) => {
      initialCarRecords.map((carRecord) => {
        if (carRecord.fields.Brand[0] === brand.id) {
          // availableBrands[brand.fields.Name] = brand.id;
          // let obj = { name: brand.fields.Name, id: brand.id };
          if (availableBrands.includes(brand.fields.Name)) {
          } else {
            availableBrands.push(brand.fields.Name);
          }
        }
      });
    });
    setBrandsInRooftop(availableBrands);
  };

  const addCarDetails = (e, carRecord) => {
    e.preventDefault();
    let userId = localStorage.getItem("userId");
    if (userId) {
      selectCarToLocalStorage(carRecord);
      setBtnDisabled(false);
      props.setSelectedCarData(carRecord);
      props.setNextPage();
      props.nextStep();
    } else {
      Axios.post("/api/user/addUser", {
        rooftopId: props.rooftopData && props.rooftopData.id,
      })
        .then((res) => {
          if (res.data) {
            let userId = res.data[0].id;
            localStorage.setItem("userId", userId);
            selectCarToLocalStorage(carRecord);
            setBtnDisabled(false);
            props.setSelectedCarData(carRecord);
            props.setNextPage();
            props.nextStep();
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(async () => {
    Axios.get("/api/getBrand").then(
      (response) => {
        setBrands(response.data);
        getUniqueBrands(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const filterCarModals = (brandId) => {
    const selectedBrandCars = initialCarRecords.filter(
      (element) => element.fields.Brand[0] === brandId
    );
    setModals(selectedBrandCars);
    setAllCars(selectedBrandCars);
  };
  const searchCar = () => {
    Axios.get(`/api/get-car/${selectedModal}`).then(
      (response) => {
        setAllCars([response.data]);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const selectCarToLocalStorage = (carDetails) => {
    localStorage.setItem("carId", carDetails.id);
  };

  const findBrandId = (name) => {
    let found = brands.find((brand) => brand.fields.Name === name);
    return found.id;
  };

  return (
    <div style={{ display: `${props.currentPage === 1 ? "block" : "none"}` }}>
      <Head>
        <title>Test Drive</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/web-fonts/Poppins-Black.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

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
            <div className="">
              <SechduleContent />
            </div>

            <div className="mt-3 mb-2">
              <div className={styles.progressContent}>
                {/* <StepBar activeStep="1" size="4" /> */}
                <div className={StepbarV1Style.hideForMobile}>
                  <StepBarV1 {...props} />
                </div>
                <div className={StepbarV1Style.hideForLaptop}>
                  <StepBarV1 mobile={true} {...props} />
                </div>
              </div>
            </div>

            {/* <div className="marTopBot10 marTB20">
              <div className={styles.slctContent}>
                <select
                  className={styles.slctstyle1}
                  id="sel1"
                  onChange={(e) => {
                    if (e.target.value === 'reset') {
                      let newModals = modals;
                      setModals(newModals);
                      setAllCars(initialCarRecords);
                    } else {
                      filterCarModals(e.target.value);
                    }
                    setSelectedBrand(e.target.value);
                  }}
                  value={selectedBrand}
                >
                  <option value="reset">Make</option>
                  {brandsInRooftop.length > 0 &&
                    brandsInRooftop.map((brandName, index) => (
                      <option
                        key={`make${index}`}
                        value={findBrandId(brandName)}
                      >
                        {brandName}
                      </option>
                    ))}
                </select>
                <select
                  className={styles.maKeslctstyle}
                  id="sel1"
                  // defaultValue="Modal"
                  value={selectedModal}
                  // onChange={(e) => {
                  //   setSelectedModal(e.target.value);
                  // }}
                  onChange={(e) => {
                    if (e.target.value === 'reset') {
                      setAllCars(initialCarRecords);
                      setSelectedModal('');
                    } else {
                      const searchedCar = initialCarRecords.find(
                        (element) => element.id === e.target.value
                      );
                      setAllCars([searchedCar]);
                      setSelectedModal(e.target.value);
                    }
                  }}
                >
                  <option value="reset">Model</option>
                  {modals.length > 0 &&
                    modals.map((modal, index) => (
                      <option key={`make${index}`} value={modal.id}>
                        {modal.fields.Name}
                      </option>
                    ))}
                </select>
                <button
                  type="button"
                  className={styles.saerchBTn}
                  onClick={() => {
                    // setAllCars(modals);
                    searchCar();
                  }}
                >
                  Search
                </button>
              </div>
            </div> */}

            <div>
              {allCars.map((carRecord, index) => (
                <div key={carRecord.id} className={styles.vehicleCard}>
                  <div className="row mr-0 ml-0">
                    <div className="col-md-3 col-lg-3 col-sm-12">
                      <div className={styles.imgParentDiv}>
                        <Image
                          className={styles.cardcarPic}
                          // src={
                          //   carRecord && carRecord.fields.Image
                          //     ? carRecord.fields.Image[0].url
                          //     : ''
                          // }
                          src={
                            carRecord && carRecord.fields.Image
                              ? carRecord.fields.Image[0].thumbnails.large.url
                              : ""
                          }
                          height={400}
                          width={600}
                          layout="responsive"
                          // objectFit="contain"
                          // borderRadius={20}
                          alt="car"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12">
                      <div className="dflex">
                        <p className={styles.carnameDesc}>
                          {brands.length > 0 ? (
                            brands.map((brand, index) => {
                              if (carRecord.fields.Brand[0] === brand.id) {
                                return (
                                  <span
                                    key={`carName${index}`}
                                  >{`${brand.fields.Name} ${carRecord.fields.Name}`}</span>
                                );
                              }
                            })
                          ) : (
                            <span key={`carName${index}`}>
                              {/* {carRecord.fields.Name} */}
                              Loading . . .
                            </span>
                          )}
                        </p>
                        <p className={styles.carViewDetails}>View details</p>
                      </div>
                    </div>
                    <div
                      className="col-md-3 col-lg-3 col-sm-12"
                      className={styles.marAuto}
                    >
                      <button
                        className={
                          isSelected && selectedCar.id === carRecord.id
                            ? btnStyles.selected
                            : btnStyles.select
                        }
                        type="button"
                        disabled={btnDisabled}
                        onClick={(e) => {
                          if (isSelected && selectedCar.id !== carRecord.id) {
                            setisSelected(true);
                          } else {
                            setisSelected(!isSelected);
                          }
                          setSelectedCar(carRecord);
                          setBtnDisabled(true);
                          addCarDetails(e, carRecord);
                          updateSelectedCarData(carRecord);
                        }}
                      >
                        {isSelected && selectedCar.id === carRecord.id
                          ? "Selected"
                          : "Choose"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {isSelected ? <div style={{ height: "75px" }}></div> : <></>}
            </div>
            {/* <div
              className={isSelected ? "relativepos fixedPos" : "relativepos"}
            >
              <div
                className={!isSelected ? styles.btnSec : styles.btnSecSelect}
              >
                <button type="button" className={btnStyles.secondary}>
                  Back
                </button>
                <button
                  type="button"
                  className={
                    isSelected ? btnStyles.primary : btnStyles.primaryDisabled
                  }
                  onClick={() => {
                    props.setNextPage();
                    props.nextStep();
                  }}
                  disabled={!isSelected}
                >
                  Continue
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
