import React, { useContext, useState } from 'react';
import Axios from 'axios';

export const TableDataContext = React.createContext();

export function useTableData() {
  return useContext(TableDataContext);
}

export function TableDataProvider({ children }) {
  const [tableData, setTableData] = useState({ brands: [], cars: [] });

  Axios.get('/api/getBrand').then(
    (response) => {
      let newTableData = tableData;
      newTableData.brands = response.data;

      setTableData(newTableData);
    },
    (error) => {
      console.log(error);
    }
  );
  Axios.get('/api/getCars').then(
    (response) => {
      let newTableData = tableData;
      newTableData.cars = response.data;

      setTableData(newTableData);
    },
    (error) => {
      console.log(error);
    }
  );

  return (
    <TableDataContext.Provider value={tableData}>
      {children}
    </TableDataContext.Provider>
  );
}
