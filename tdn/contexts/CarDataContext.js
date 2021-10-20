import React, { useContext, useState } from 'react';

export const CarDataContext = React.createContext();
export const CarDataUpdateContext = React.createContext();

export function useCarData() {
  return useContext(CarDataContext);
}
export function useUpdateCarData(data) {
  return useContext(CarDataUpdateContext);
}

export function CarDataProvider({ children }) {
  const [carData, setCarData] = useState({});

  function updateData(data) {
    setCarData(data);
  }

  return (
    <CarDataContext.Provider value={carData}>
      <CarDataUpdateContext.Provider value={updateData}>
        {children}
      </CarDataUpdateContext.Provider>
    </CarDataContext.Provider>
  );
}
