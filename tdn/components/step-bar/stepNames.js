import stepStyle from './../../styles/StepBar.module.css';

export default function StepNames(props) {
  const { activeStep } = props;
  const stepText = [
    'Pick a Vehicle',
    'Pick a Day & Time',
    // 'Pick Location',
    'The Basics',
    'Proof of License',
  ];
  return (
    <>
      {stepText.map((text, index) => {
        return (
          <span
            key={index}
            className={
              activeStep == index + 1
                ? stepStyle.stepNameBox
                : stepStyle.stepNameBoxInactive
            }
          >
            {' '}
            {text}
          </span>
        );
      })}
    </>
  );
}
