import stepStyles from './../../styles/StepBar.module.css';

export default function Step(props) {
  const { active, stepNumber, stepText, isLastStep, isFirstStep } = props;

  return (
    <div className={stepStyles.step}>
      <div className={stepStyles.stepNumberBox}>
        {isFirstStep ? (
          <span className={stepStyles.pathStart}></span>
        ) : (
          <span className={stepStyles.pathStart}>
            <span className={stepStyles.dot}></span>
            <span className={stepStyles.dot}></span>
            <span className={stepStyles.dot}></span>
          </span>
        )}
        <div
          className={!active ? stepStyles.stepNumber : stepStyles.stepNumberBg}
        >
          <div className={active ? stepStyles.active : stepStyles.inactive}>
            {stepNumber}
          </div>
        </div>

        {isLastStep ? (
          <>
            {' '}
            <span className={stepStyles.pathEnd}></span>
          </>
        ) : (
          <span className={stepStyles.pathEnd}>
            {/* <span className={stepStyles.leftMargin}></span> */}
            <span className={stepStyles.dot}></span>
            <span className={stepStyles.dot}></span>
            <span className={stepStyles.dot}></span>
            {/* <span className={stepStyles.rightMargin}></span> */}
          </span>
        )}
      </div>
    </div>
  );
}
