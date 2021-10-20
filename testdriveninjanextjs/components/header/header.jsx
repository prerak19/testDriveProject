import styles from './../../styles/Home.module.css';

import React from 'react'

import SechduleContent from "../../common-component/sechduleDesc"
import StepBar from "../../components/step-bar/stepBar"

export default function header() {
    return (
        <>
            <div className="height15">
                <SechduleContent />
              </div>

              <div className="height15 my-5">
                <div className={styles.progressContent}>
                  <StepBar activeStep="1" size="4" />
                </div>
              </div>
        </>
    )
}
