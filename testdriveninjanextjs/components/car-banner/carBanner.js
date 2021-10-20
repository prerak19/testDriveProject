import styles from './../../styles/Home.module.css';

import React from 'react';

export default function carBanner() {
  return (
    <div className="height100">
      <img
        className="d-block w-100"
        className={styles.imageborder}
        src="/carDriving.png"
        alt="Picture of the car"
      />
    </div>
  );
}
