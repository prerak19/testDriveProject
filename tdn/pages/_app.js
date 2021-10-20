/** @format */

import "./../styles/responsive.css";
import "../styles/globals.css";
import "../public/fonts.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'font-awesome-icons'
// @import '~antd/dist/antd.css';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './../styles/responsive.css';
import "react-calendar/dist/Calendar.css";
import {
  useUserData,
  useUpdateUserData,
  UserDataProvider,
  UserDataContext,
} from "../contexts/UserDataContext";
import { CarDataProvider } from "./../contexts/CarDataContext";
import { DateTimeDataProvider } from "../contexts/DateTimeDataContext";
// import { TableDataProvider } from './../contexts/TableDataContext';
function MyApp({ Component, pageProps }) {
  return (
    <UserDataProvider>
      <CarDataProvider>
        <DateTimeDataProvider>
          {/* <TableDataProvider> */}
          <Component {...pageProps} />
          {/* </TableDataProvider> */}
        </DateTimeDataProvider>
      </CarDataProvider>
    </UserDataProvider>
  );
}
export default MyApp;
