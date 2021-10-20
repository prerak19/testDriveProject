/** @format */

import React from "react";
import styles from "../../styles/Home.module.css";
import btnStyles from "./../../styles/Btn.module.css";
import SechduleContent from "./../../common-component/sechduleDesc";
import StepBar from "./../../components/step-bar/stepBar";

import { useCarData, useUpdateCarData } from "./../../contexts/CarDataContext";
import Axios from "axios";
import { resolveHref } from "next/dist/next-server/lib/router/router";

const pickLocation = (props) => {
  const [isSelected, setisSelected] = React.useState(false);
  const [rooftops, setRooftops] = React.useState([]);
  const [rooftopCars, setRooftopCars] = React.useState([]);
  // const { rooftopData } = props;
  // const selectedCar = useCarData();
  const { selectedCarData } = props;
  React.useEffect(() => {
    props.scrollToTop();
  }, [props.isActive]);

  // const getCarData = () => {};

  React.useEffect(() => {
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

  React.useEffect(async () => {
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

  React.useEffect(() => {
    console.log("fetched cars ", rooftopCars);
  }, [rooftopCars]);

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
            <div className={`${styles.progressContent}  my-5`}>
              <StepBar activeStep="3" size="4" />
            </div>

            <div className="my-4">
              <div className="pick-location-desc">
                <h2>I want to Pickup Location</h2>
              </div>
            </div>
            <div className="mt-5">
              <div className="tab-content">
                <div className="dealershipContent">
                  <div>
                    <div className="row">
                      <div className="col-sm-12 col-md-3 col-lg-3">
                        <div className="mapContent displaynone">
                          <img src="/map.png" alt="" />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="row">
                          {rooftopCars && rooftopCars[0] ? (
                            rooftopCars.map((car) => (
                              <>
                                {" "}
                                <div className="col-sm-12 col-md-4 col-lg-4 p-0 displaynone">
                                  <img
                                    // src="/car2.png"
                                    src={
                                      car.fields.Image[0].thumbnails.large.url
                                    }
                                    alt=""
                                    height="95%"
                                    width="95%"
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
                          {/* <div className="col-sm-12 col-md-4 col-lg-4 p-0 displaynone">
                            <img
                              src="/car2.png"
                              alt=""
                              height="95%"
                              width="95%"
                            />
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4 p-0 displaynone">
                            <img
                              src="/car2.png"
                              alt=""
                              height="95%"
                              width="95%"
                            />
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4 p-0 displaynone">
                            <img
                              src="/car2.png"
                              alt=""
                              height="95%"
                              width="95%"
                            />
                          </div> */}
                        </div>
                        <div className="dealarDesc">
                          <h2>
                            {props.rooftopData &&
                              props.rooftopData.fields &&
                              props.rooftopData.fields.Name}
                          </h2>
                          <p>
                            Canal Street to Bayard Street, New York City, NY
                            10013
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-3 col-lg-3">
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
                          {isSelected ? "Selected" : "Choose"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Dealership" key="1">
                  <div>
                    <div className="row">
                      <div className="col-sm-12 col-md-3 col-lg-3">
                        <div className="mapContent">
                          <img src="/map.png" alt="" />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="row">
                          <div className="col-sm-12 col-md-4 col-lg-4 p-0">
                            <img
                              src="/car2.png"
                              alt=""
                              height="95%"
                              width="95%"
                            />
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4 p-0">
                            <img
                              src="/car2.png"
                              alt=""
                              height="95%"
                              width="95%"
                            />
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4 p-0">
                            <img
                              src="/car2.png"
                              alt=""
                              height="95%"
                              width="95%"
                            />
                          </div>
                        </div>
                        <div className="dealarDesc">
                          <h2>Dealer Chinatown</h2>
                          <p>
                            Canal Street to Bayard Street, New York City, NY
                            10013Map
                        </p>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-3 col-lg-3">
                        <button className={styles.chooseBTn} type="button">
                          Choose
                      </button>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Home" key="2">
                  <div className="basicInfoForm">
                    <div className="row">
                      <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Address line"
                            id="address_line"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            id="city_name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="State"
                            id="state_name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Zip code"
                            id="zip_code"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Work" key="3">
                  <div className="basicInfoForm">
                    <div className="row">
                      <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Company name"
                            id="company_name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Address line"
                            id="address_line"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Additional Information (optional)"
                            id="additional_info"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Zip code"
                            id="zip_code"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
              </Tabs> */}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const pickLocation = (props) => {
//   const [isSelected, setisSelected] = React.useState(false);
//   return (
//     <div className="container-fluid height100vh">
//       <div className="row">
//         <div className="col-sm-12 col-md-5 col-lg-5 hideContent">
//           <div className="height100">
//             <img
//               className="d-block w-100"
//               className={styles.imageborder}
//               src="/carDriving.png"
//               alt="Picture of the car"
//             />
//           </div>
//         </div>
//         <div className="col-sm-12 col-md-7 col-lg-7">
//           <div className="height100">
//             <div className="sechduleBody">
//               <SechduleContent />
//             </div>

//             <div className="height15">
//               <div className={styles.progressContent}>
//                 <StepBar activeStep="3" size="4" />
//               </div>
//             </div>

//             <div className="height10">
//               <div className="pick-location-desc">
//                 <h2>I want to pick up at</h2>
//               </div>
//             </div>

//             <div className="height10 marTopBot10">
//               <div className="delarshipBtn">
//                 <button type="button" className="btn btn-primary">
//                   Dealership
//                 </button>
//               </div>
//             </div>
//             <div className="height35">
//               <div className="tab-content">
//                 <div className="dealershipContent">
//                   <div>
//                     <div className="row">
//                       <div className="col-sm-12 col-md-3 col-lg-3">
//                         <div className="mapContent">
//                           <img src="/map.png" alt="" />
//                         </div>
//                       </div>
//                       <div className="col-sm-12 col-md-6 col-lg-6">
//                         <div className="row">
//                           <div className="col-sm-12 col-md-4 col-lg-4 p-0 displaynone">
//                             <img
//                               src="/car2.png"
//                               alt=""
//                               height="95%"
//                               width="95%"
//                             />
//                           </div>
//                           <div className="col-sm-12 col-md-4 col-lg-4 p-0 displaynone">
//                             <img
//                               src="/car2.png"
//                               alt=""
//                               height="95%"
//                               width="95%"
//                             />
//                           </div>
//                           <div className="col-sm-12 col-md-4 col-lg-4 p-0 displaynone">
//                             <img
//                               src="/car2.png"
//                               alt=""
//                               height="95%"
//                               width="95%"
//                             />
//                           </div>
//                         </div>
//                         <div className="dealarDesc">
//                           <h2>Dealer Chinatown</h2>
//                           <p>
//                             Canal Street to Bayard Street, New York City, NY
//                             10013Map
//                           </p>
//                         </div>
//                       </div>
//                       <div className="col-sm-12 col-md-3 col-lg-3">
//                         <button
//                           className={
//                             isSelected
//                               ? styles.selectedCarBtn
//                               : styles.chooseBTn
//                           }
//                           type="button"
//                           onClick={() => {
//                             setisSelected(true);
//                           }}
//                         >
//                           {isSelected ? 'Selected' : 'Choose'}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* <Tabs defaultActiveKey="1" onChange={callback}>
//                   <TabPane tab="Dealership" key="1">
//                     <div>
//                       <div className="row">
//                         <div className="col-sm-12 col-md-3 col-lg-3">
//                           <div className="mapContent">
//                             <img src="/map.png" alt="" />
//                           </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-6">
//                           <div className="row">
//                             <div className="col-sm-12 col-md-4 col-lg-4 p-0">
//                               <img
//                                 src="/car2.png"
//                                 alt=""
//                                 height="95%"
//                                 width="95%"
//                               />
//                             </div>
//                             <div className="col-sm-12 col-md-4 col-lg-4 p-0">
//                               <img
//                                 src="/car2.png"
//                                 alt=""
//                                 height="95%"
//                                 width="95%"
//                               />
//                             </div>
//                             <div className="col-sm-12 col-md-4 col-lg-4 p-0">
//                               <img
//                                 src="/car2.png"
//                                 alt=""
//                                 height="95%"
//                                 width="95%"
//                               />
//                             </div>
//                           </div>
//                           <div className="dealarDesc">
//                             <h2>Dealer Chinatown</h2>
//                             <p>
//                               Canal Street to Bayard Street, New York City, NY
//                               10013Map
//                           </p>
//                           </div>
//                         </div>
//                         <div className="col-sm-12 col-md-3 col-lg-3">
//                           <button className={styles.chooseBTn} type="button">
//                             Choose
//                         </button>
//                         </div>
//                       </div>
//                     </div>
//                   </TabPane>
//                   <TabPane tab="Home" key="2">
//                     <div className="basicInfoForm">
//                       <div className="row">
//                         <div className="col-md-6 col-lg-6 col-sm-12">
//                           <div className="form-group">
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="Address line"
//                               id="address_line"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6 col-lg-6 col-sm-12">
//                           <div className="form-group">
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="City"
//                               id="city_name"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6 col-lg-6 col-sm-12">
//                           <div className="form-group">
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="State"
//                               id="state_name"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6 col-lg-6 col-sm-12">
//                           <div className="form-group">
//                             <input
//                               type="number"
//                               className="form-control"
//                               placeholder="Zip code"
//                               id="zip_code"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </TabPane>
//                   <TabPane tab="Work" key="3">
//                     <div className="basicInfoForm">
//                       <div className="row">
//                         <div className="col-md-6 col-lg-6 col-sm-12">
//                           <div className="form-group">
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="Company name"
//                               id="company_name"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6 col-lg-6 col-sm-12">
//                           <div className="form-group">
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="Address line"
//                               id="address_line"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6 col-lg-6 col-sm-12">
//                           <div className="form-group">
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="Additional Information (optional)"
//                               id="additional_info"
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6 col-lg-6 col-sm-12">
//                           <div className="form-group">
//                             <input
//                               type="number"
//                               className="form-control"
//                               placeholder="Zip code"
//                               id="zip_code"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </TabPane>
//                 </Tabs> */}
//               </div>
//             </div>

//             <div className="height10 relativepos">
//               <div className={styles.btnSec}>
//                 <button
//                   type="button"
//                   className={styles.backBtn}
//                   onClick={() => props.previousStep()}
//                 >
//                   Back
//                 </button>
//                 <button
//                   type="button"
//                   className={
//                     isSelected ? styles.backContinue : styles.disabledBtn
//                   }
//                   onClick={() => props.nextStep()}
//                   disabled={!isSelected}
//                 >
//                   Continue
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
export default pickLocation;
