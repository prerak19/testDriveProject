import React, { useEffect, useState } from 'react';
import stepStyle from './../../styles/StepBarV1.module.css';

export default function stepBarV1(props) {
  const { currentPage, goToStep, setThisPage } = props;
  const [carId, setcarId] = useState('');
  const [driveForm, setdriveForm] = useState();

  useEffect(() => {
    let carId = localStorage.getItem('carId');
    setcarId(carId);
  });

  useEffect(() => {
    let dupDriveForm;
    const form = localStorage.getItem('driveForm');
    if (form) {
      dupDriveForm = JSON.parse(form);
    }
    setdriveForm(dupDriveForm);
  }, [currentPage]);

  const steps = [
    { key: 1, label: 'Pick a Vehicle', disabled: false },
    {
      key: 2,
      label: 'Pick a Day & Time',
      disabled: carId !== null ? false : true,
    },
    {
      key: 3,
      label: 'Pick Location',
      disabled: driveForm && driveForm.time ? false : true,
    },
    {
      key: 4,
      label: 'The Basics',
      disabled: driveForm && driveForm.time ? false : true,
    },
    {
      key: 5,
      label: 'Proof of License',
      disabled: driveForm && driveForm.userData ? false : true,
    },
  ];

  if (props.mobile) {
    return (
      <div className={`${stepStyle.main} row`}>
        {steps.map((step, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                !step.disabled && goToStep(i + 1);
                !step.disabled && setThisPage(i + 1);
              }}
              className={`col-3 px-0 ${stepStyle.width20} ${
                step.key === 1 && currentPage === 1 ? stepStyle.firstPage : ''
              } ${
                currentPage !== 1 &&
                currentPage === step.key &&
                step.key !== steps.length
                  ? stepStyle.startActive
                  : ''
              } ${
                currentPage >= steps.length && step.key === steps.length
                  ? stepStyle.lastActive
                  : ''
              }`}
            >
              {step.key}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`${stepStyle.main} row mx-0`}>
      {steps.map((step, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              !step.disabled && goToStep(i + 1);
              !step.disabled && setThisPage(i + 1);
            }}
            className={`col-3 px-0 ${stepStyle.width20} ${
              step.key === 1 && currentPage === 1 ? stepStyle.firstPage : ''
            } ${
              currentPage !== 1 &&
              currentPage === step.key &&
              step.key !== steps.length
                ? stepStyle.startActive
                : ''
            } ${
              currentPage >= steps.length && step.key === steps.length
                ? stepStyle.lastActive
                : ''
            }`}
          >
            {step.label}
          </div>
        );
      })}
    </div>
  );
}
