import React, { useContext, useState } from 'react';

export const UserDataContext = React.createContext();
export const UserDataUpdateContext = React.createContext();

export function useUserData() {
  return useContext(UserDataContext);
}
export function useUpdateUserData() {
  return useContext(UserDataUpdateContext);
}

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState(null);

  function updateData(data) {
    setUserData(data);
  }
  //   setTimeout(() => {
  //       setUserData("raja")
  //   }, 10000);

  return (
    <UserDataContext.Provider value={userData}>
      <UserDataUpdateContext.Provider value={updateData}>
        {children}
      </UserDataUpdateContext.Provider>
    </UserDataContext.Provider>
  );
}
