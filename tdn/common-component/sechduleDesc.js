import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
const sechduleDesc = () => {
  return (
    <div className="">
      <div className="marTopBot20">
        <h1 className={styles.scheduleHeading}>Schedule Your Test Drive</h1>
      </div>
      <div className="marTopBot10">
        <p className={styles.descText}>
          Set everything up now so you can just show up and drive - No Talking,
          No Waiting, No Selling, Just Driving
        </p>
      </div>
      <div className="marTopBot10">
      <div className={styles.driverLicence}>
        <FontAwesomeIcon className={styles.h20} icon={faInfoCircle} /> Driver
        must have a valid drivers license
      </div>
      </div>
     
    </div>
  );
};
export default sechduleDesc;
