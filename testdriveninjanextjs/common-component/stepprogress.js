// import the progress bar
import StepProgressBar from 'react-step-progress';
// import the stylesheet
import 'react-step-progress/dist/index.css';
const stepProgrss = (props) => {
  // setup the step content
  const { stepNumber } = props;
  const step1Content = <h1>Pick a Vehicle</h1>;
  const step2Content = <h1>Pick a Day & Time</h1>;
  const step3Content = <h1>Pick Location</h1>;
  const step4content = <h1>The Basics</h1>;
  const step5content = <h1>Proof of License</h1>;

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    // return a boolean
  }

  function step3Validator() {
    // return a boolean
  }
  function step4Validator() {
    // return a boolean
  }
  function step5Validator() {
    // return a boolean
  }

  function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }

  return (
    <div className="stepProgress">
      <StepProgressBar
        startingStep={stepNumber}
        onSubmit={onFormSubmit}
        steps={[
          {
            label: 'Pick a Vehicle',
            // subtitle: '10%',
            name: 'step 1',
            // content: step1Content
          },
          {
            label: 'Pick a Day & Time',
            // subtitle: '50%',
            name: 'step 2',
            // content: step2Content,
            validator: step2Validator,
          },
          {
            label: 'Pick Location',
            // subtitle: '100%',
            name: 'step 3',
            // content: step3Content,
            validator: step3Validator,
          },
          {
            label: 'The Basics',
            // subtitle: '100%',
            name: 'step 4',
            // content: step3Content,
            validator: step4Validator,
          },
          {
            label: 'Proof of License',
            // subtitle: '100%',
            name: 'step 5',
            // content: step3Content,
            validator: step5Validator,
          },
        ]}
      />
      <div className="hidetext"></div>
    </div>
  );
};

export default stepProgrss;
