// import styles from '../styles/Home.module.css';
import React, { useContext, useState, useEffect } from 'react';
import { useUserData } from './../../contexts/UserDataContext';
import Axios from 'axios';

const testComp = () => {
  //   const [imageFile, setImageFile] = React.useState(null);
  // const [image, setImage] = React.useState(null);
  // const image = useUserData();
  const image = useUserData();
  const [airtable, setAirtable] = useState({});

  //   const setImage = useUpdateUserData();
  useEffect(async () => {
    // const data = await axios.get('/api/getBrand');
    // setAirtable(data);
    Axios.get('/api/getCar?carId=rec6U6F4RK4rApcM5').then(
      (response) => {
        setAirtable(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="">
      <h1>
        {typeof image} {image}
      </h1>
      <h1>airtable {JSON.stringify(airtable)}</h1>

      <img
        src={image}
        height="25%"
        width="25%"
        border-radius="20px"
        alt="tegs image here"
      />
    </div>
  );
};

export default testComp;
