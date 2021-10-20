import { openPopupWidget } from 'react-calendly';

import btnStyles from './../../styles/Btn.module.css';
const CustomButton = (props) => {
  const { url, prefill, pageSettings, utm } = props;
  const onClick = () => {
    openPopupWidget({ url, prefill, pageSettings, utm });
  };

  return (
    <button
      type="button"
      className={props.disable ? btnStyles.secondary : btnStyles.primary}
      onClick={onClick}
      disabled={props.disable}
    >
      Continue
    </button>
  );
};
export default CustomButton;
