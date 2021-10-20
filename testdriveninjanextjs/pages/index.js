/** @format */

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import btnStyles from '../styles/Btn.module.css';
import Image from 'next/image';
// import 'bootstrap/dist/css/bootstrap.min.css'
import SechduleContent from '../common-component/sechduleDesc';
import StepBar from './../components/step-bar/stepBar';
import { carsTableBase, rooftopTableBase } from './api/utils/airtable';
import StepWizard from 'react-step-wizard';
import SelectCar from './../components/car-select/selectCar';
import PickDateTime from './../components/pick-date-time/pickDateTime';
import PickLocation from './../components/pick-location/pickLocation';
import BasicInfo from './../components/basic-info/basicInfo';
import CryptoJS from 'crypto-js';
import LicenseProof from './../components/licence-proof/licenceProof';
import UploadDl from './../components/licence-proof/uploadDl';
import DlUploadFront from './../components/licence-proof/dlUploadFront';
import DlUploadBack from './../components/licence-proof/dlUploadBack';
import DlVerify from './../components/dl-verify/dlVerify';
import ConfirmTestDrive from './../components/confirm-test-drive/confirmTestDrive';
import SetTestDrive from './../components/confirm-test-drive/setTestDrive';
import React, { useState, useRef } from 'react';
import Axios from 'axios';

export default function Home(props) {
  const { initialCarRecords, rt, error } = props;
  const myRef = useRef(null);
  // const goToTop = () => {
  //   // window.scrollTo({ behavior: 'smooth', top: headRef.current.offsetTop });
  //   headRef.current.scrollIntoView();
  // };

  const executeScroll = () => myRef.current.scrollIntoView({ block: 'start' });

  const [selectedCarData, setSelectedCarData] = React.useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [rooftopId, setRooftopId] = useState(rt);
  const [rooftopData, setRooftopData] = useState({});
  const [frontImageBase64, setFrontImageBase64] = useState('');
  const [imageFile1, setImageFile1] = React.useState(null);

  const [onReload, setOnReload] = useState(false);
  const [userDataState, setUserDataState] = useState({});

  const [imageFile2, setImageFile2] = React.useState(null);
  const [backImageBase64, setBackImageBase64] = useState('');

  const [somethingWrong, setSomethingWrong] = useState(false);

  const [selectedDateTime, setSelectedDateTime] = useState('');

  if (error || !initialCarRecords || initialCarRecords.length <= 0) {
    return <div>Unable to fetch data</div>;
  }
  React.useEffect(() => {
    console.log('changed user data state', userDataState);
  }, [userDataState]);

  React.useEffect(() => {
    setOnReload(true);
    let page = localStorage.getItem('currentPage');
    let decryptedData;
    if (page) {
      let bytes = CryptoJS.AES.decrypt(page, 'SECRET_KEY');
      if ((Math.sign(bytes.sigBytes) === -1) || bytes.sigBytes === 0) {
        var ciphertext = CryptoJS.AES.encrypt(`1`, 'SECRET_KEY').toString();
        localStorage.setItem('currentPage', ciphertext);
      } else {
        decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
    }
    setCurrentPage(decryptedData || 1);
    const driveForm = localStorage.getItem('driveForm');
    if (driveForm) {
      let obj = JSON.parse(driveForm);
      if (obj.time) {
        let selectedTime = obj.time;
        setSelectedDateTime(selectedTime);
      }
    }
  }, [onReload]);

  React.useEffect(() => {
    console.log('changed ', { rooftopId });
  }, [rooftopId]);

  React.useEffect(() => {
    console.log('changed ', { selectedCarData });
  }, [selectedCarData]);

  React.useEffect(async () => {
    // const rooftopId = localStorage.getItem('rooftopId');
    // setRooftopId(localStorage.getItem(rooftopId));

    Axios.get(`/api/get-rooftop/${rooftopId}`).then(
      (response) => {
        // setBrands(response.data);
        setRooftopData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  React.useEffect(() => {}, [frontImageBase64, backImageBase64]);

  const setInitialPage = () => {
    var ciphertext = CryptoJS.AES.encrypt(`1`, 'SECRET_KEY').toString();
    localStorage.setItem('currentPage', ciphertext);
    setCurrentPage(1);
  };
  const setNextPage = () => {
    let page = currentPage + 1;
    var ciphertext = CryptoJS.AES.encrypt(`${page}`, 'SECRET_KEY').toString();
    localStorage.setItem('currentPage', ciphertext);
    setCurrentPage(page);
  };
  const setPreviousPage = () => {
    let page = currentPage - 1;
    var ciphertext = CryptoJS.AES.encrypt(`${page}`, 'SECRET_KEY').toString();
    localStorage.setItem('currentPage', ciphertext);
    setCurrentPage(page);
  };
  const setThisPage = (number) => {
    var ciphertext = CryptoJS.AES.encrypt(`${number}`, 'SECRET_KEY').toString();
    localStorage.setItem('currentPage', ciphertext);
    setCurrentPage(number);
  };
  return (
    <div className={styles.stepWizardContainer}>
      <Head>
        {/* <script
          src="https://apis.google.com/js/api.js"
          type="text/javascript"
        ></script> */}
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Head>
      <span ref={myRef}></span>
      <StepWizard initialStep={currentPage}>
        <SelectCar
          onReload
          initialCarRecords={initialCarRecords}
          setSelectedCarData={setSelectedCarData}
          setNextPage={setNextPage}
          currentPage={currentPage}
          scrollToTop={executeScroll}
          rooftopData={rooftopData}
        />
        <PickDateTime
          onReload
          setNextPage={setNextPage}
          setPreviousPage={setPreviousPage}
          currentPage={currentPage}
          scrollToTop={executeScroll}
          selectedCarData={selectedCarData}
          selectedDateTime={selectedDateTime}
          setSelectedDateTime={setSelectedDateTime}
        />
        {/* <PickLocation
          setNextPage={setNextPage}
          setPreviousPage={setPreviousPage}
          currentPage={currentPage}
          scrollToTop={executeScroll}
          rooftopData={rooftopData}
          selectedCarData={selectedCarData}
        /> */}
        <BasicInfo
          onReload
          setNextPage={setNextPage}
          setPreviousPage={setPreviousPage}
          currentPage={currentPage}
          scrollToTop={executeScroll}
          setUserDataState={setUserDataState}
        />
        {/* <LicenseProof
          setPreviousPage={setPreviousPage}
          scrollToTop={executeScroll}
        />
        <UploadDl scrollToTop={executeScroll} /> */}
        <DlUploadFront
          currentPage={currentPage}
          setNextPage={setNextPage}
          scrollToTop={executeScroll}
          frontImageBase64={frontImageBase64}
          setFrontImageBase64={setFrontImageBase64}
          setPreviousPage={setPreviousPage}
          setImageFile1={setImageFile1}
          imageFile1={imageFile1}
        />
        <DlUploadBack
          scrollToTop={executeScroll}
          currentPage={currentPage}
          setNextPage={setNextPage}
          backImageBase64={backImageBase64}
          setBackImageBase64={setBackImageBase64}
          setPreviousPage={setPreviousPage}
          setImageFile2={setImageFile2}
          imageFile2={imageFile2}
        />
        <DlVerify
          scrollToTop={executeScroll}
          currentPage={currentPage}
          backImageBase64={backImageBase64}
          setBackImageBase64={setBackImageBase64}
          frontImageBase64={frontImageBase64}
          setFrontImageBase64={setFrontImageBase64}
          setNextPage={setNextPage}
          setImageFile2={setImageFile2}
          setImageFile1={setImageFile1}
          setThisPage={setThisPage}
          setSomethingWrong={setSomethingWrong}
          somethingWrong={somethingWrong}
        />
        <ConfirmTestDrive
          currentPage={currentPage}
          setNextPage={setNextPage}
          scrollToTop={executeScroll}
          selectedCarData={selectedCarData}
          setImageFile2={setImageFile2}
          setImageFile1={setImageFile1}
          setThisPage={setThisPage}
          rooftopData={rooftopData}
          rt={rt}
          selectedDateTime={selectedDateTime}
          userDataState={userDataState}
          setSomethingWrong={setSomethingWrong}
          somethingWrong={somethingWrong}
        />
        <SetTestDrive
          setInitialPage={setInitialPage}
          currentPage={currentPage}
          scrollToTop={executeScroll}
          selectedCarData={selectedCarData}
          rooftopData={rooftopData}
          selectedDateTime={selectedDateTime}
        />
      </StepWizard>

      {/* <button onClick={executeScroll}>Go to top</button> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { rt } = context.query;
  try {
    const rooftop = await rooftopTableBase.find(rt);
    const promiseArray = rooftop.fields.Cars.map((carId) => {
      return new Promise(async (resolve, reject) => {
        let res = {};
        try {
          res = await carsTableBase.find(carId);
        } catch (err) {
          console.log('promise array error', err);
        } finally {
          resolve({ id: res.id, fields: res.fields });
        }
      });
    });

    let rooftopCarsData = [];
    try {
      rooftopCarsData = await Promise.all(promiseArray);
    } catch (err) {
      console.log(err);
    }

    return {
      props: {
        initialCarRecords: rooftopCarsData,
        rt,
        // initialRooftopData: rooftop,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        error: true,
      },
    };
  }
}
