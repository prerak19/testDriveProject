import React, { useState, useEffect, useRef } from 'react';
import ddStyles from './../../styles/Dropdown.module.css';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // only adds the event listener when the dropdown is opened
    if (!isOpen) return;
    function handleClose(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    window.addEventListener('click', handleClose);
    // clean up
    return () => window.removeEventListener('click', handleClose);
  }, [isOpen]);
  return (
    <div className={ddStyles.ddWrapper}>
      <button type="button" className={ddStyles.ddHeader} onClick={toggleList}>
        <span className={ddStyles.ddHeaderTitle}>
        {props.timeZones.find((x, i) => x.value === props.timeZone).title + `(${moment().tz(props.timeZone).format('LT')}`}</span>{' '}
        <span className="ml-2">
          {isOpen ? (
            <FontAwesome name="angle-up" />
          ) : (
            <FontAwesome name="angle-down" />
          )}
        </span>
      </button>
      {isOpen && (
        <div ref={dropdownRef} role="list" className={ddStyles.ddList}>
          {props.timeZones.map((item, index) => (
            <div
              className={
                props.timeZone == item.value
                  ? ddStyles.ddListItemSelected
                  : ddStyles.ddListItem
              }
              key={index}
              onClick={() => {
                props.setTimeZone(item.value);
                toggleList();
              }}
            >
              <div>{item.title}</div>{' '}
              <div>{moment(new Date()).tz(item.value).format('LT')}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
