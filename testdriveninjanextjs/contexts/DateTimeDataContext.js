import React, { useContext, useState } from 'react';

export const DateTimeContext = React.createContext();
export const DateTimeUpdatedContext = React.createContext();

export function useDateTimeData() {
  return useContext(DateTimeContext);
}
export function useUpdatedDateTimeData() {
  return useContext(DateTimeUpdatedContext);
}

export function DateTimeDataProvider({ children }) {
  const [DateTime, setDateTime] = useState(null);

  function updateData(data) {
    setDateTime(data);
  }
  //   setTimeout(() => {
  //       setUserData("raja")
  //   }, 10000);

  return (
    <DateTimeContext.Provider value={DateTime}>
      <DateTimeUpdatedContext.Provider value={updateData}>
        {children}
      </DateTimeUpdatedContext.Provider>
    </DateTimeContext.Provider>
  );
}
