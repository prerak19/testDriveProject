import stepStyle from './../../styles/StepBar.module.css';
import Step from './step';
import StepNames from './stepNames';
export default function StepBar(props) {
  const { activeStep, size } = props;
  let stepArray = [];
  for (let i = 1; i <= size; i++) {
    stepArray.push(i);
  }
  const stepText = [
    'Pick a Vehicle',
    'Pick a Day & Time',
    // 'Pick Location',
    'The Basics',
    'Proof of License',
  ];

  return (
    <div className={stepStyle.container}>
      <div className={stepStyle.stepNumbersContainer}>
        {stepArray.map((stepNumber, index) => {
          return (
            <Step
              key={index}
              active={activeStep == stepNumber ? true : false}
              stepNumber={stepNumber}
              isLastStep={parseInt(size) === stepNumber ? true : false}
              isFirstStep={stepNumber == 1 ? true : false}
              stepText={stepText[index]}
            />
          );
        })}
      </div>
      <div className={stepStyle.stepNamesContainer}>
        <StepNames activeStep={activeStep} />
      </div>
    </div>
  );
}
