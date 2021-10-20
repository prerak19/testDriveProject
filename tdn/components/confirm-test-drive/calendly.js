import { openPopupWidget } from 'react-calendly';

import FontAwesome from 'react-fontawesome';
import btnStyles from './../../styles/Btn.module.css';
const CustomButton = (props) => {
  const { url, prefill, pageSettings, utm } = props;
  const onClick = () => {
    openPopupWidget({ url, prefill, pageSettings, utm });
  };

  return (
    <button
      type="button"
      // className={props.disable ? btnStyles.secondary : btnStyles.primary}
      className={btnStyles.primary}
      onClick={onClick}
      disabled={props.disable}
    >
      {props.disable ? (
        <FontAwesome name="fas fa-spinner fa-pulse" spin />
      ) : (
        'Continue'
      )}
    </button>
  );
};
export default CustomButton;
