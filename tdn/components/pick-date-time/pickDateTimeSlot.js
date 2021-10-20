/** @format */

import SlotStyle from "./../../styles/DateTimeSlot.module.css";
export default function DateTimeSlot() {
  return (
    <div className="slotConatiner">
      <ul className={SlotStyle.listType}>
        <div className={SlotStyle.listContainer}>
          <li className={SlotStyle.slotActive}>9:00 AM</li>
          <li className={SlotStyle.list}>10:00 AM</li>
          <li className={SlotStyle.list}>11:00 AM</li>
          <li className={SlotStyle.list}>12:00 AM</li>
          <li className={SlotStyle.list}>1:00 PM</li>
          <li className={SlotStyle.list}>9:00 AM</li>
          <li className={SlotStyle.list}>10:00 AM</li>
          <li className={SlotStyle.list}>11:00 AM</li>
          <li className={SlotStyle.list}>12:00 AM</li>
          <li className={SlotStyle.list}>1:00 PM</li>
        </div>
      </ul>
    </div>
  );
}
