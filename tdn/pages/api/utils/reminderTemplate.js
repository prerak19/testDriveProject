const getSmsTemplate = (type, userData, carData, rooftopData, time, date) => {
  if (type === 'day') {
    return `Hi  ${
      userData.fields.FirstName + ' ' + userData.fields.LastName
    }, just a friendly reminder, your TestDrive of ${
      carData.fields.Name
    } is tomorrow at ${time}. Please arrive 15 minutes early with a valid driver’s license. `;
  }
  if (type === 'hour') {
    return `Hi  ${
      userData.fields.FirstName + ' ' + userData.fields.LastName
    }, just a friendly reminder, your TestDrive of ${
      carData.fields.Name
    } is TODAY at ${time}. Please arrive 15 minutes early with a valid driver’s license.`;
  }
  return `Hi ${
    userData.fields.FirstName + ' ' + userData.fields.LastName
  }, Thank you for booking a TestDrive on ${time} (ET) ${date}.  Please arrive 15 minutes early with a valid driver’s license.`;
};

const getEmailTemplate = (carData, rooftopData, location, time, date) => {
  return `<html>
  <head>
    <title>Reminadar page</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div>
      <div>
        <p
          style="
            font-family: sans-serif;
            font-weight: bold;
            font-style: normal;
            font-size: 18px;
            color: black;
          "
        >
          Vehicle: ${carData.fields.Name}
        </p>
        <p
          style="
            font-family: sans-serif;
            font-weight: bold;
            font-style: normal;
            font-size: 18px;
            color: black;
          "
        >
          Location: ${location}
        </p>
        <p
          style="
            font-family: sans-serif;
            font-weight: bold;
            font-style: normal;
            font-size: 18px;
            color: black;
          "
        >
          Time: ${time} (ET)
        </p>
        <p
          style="
            font-family: sans-serif;
            font-weight: bold;
            font-style: normal;
            font-size: 18px;
            color: black;
          "
        >
          Date: ${date}
        </p>
        <table width="100%">
          <tr>
            <td align="center">
              <p
                style="
                  font-family: sans-serif;
                  font-weight: 500;
                  font-style: normal;
                  font-size: 16px;
                  color: gray;
                "
              >
                Thank you for scheduling a touchless test drive with
              </p>
              <h2
                style="
                  font-family: sans-serif;
                  font-weight: 500;
                  font-style: normal;
                  font-size: 20px;
                  color: gray;
                  text-transform: capitalize;
                "
              >
                ${rooftopData.fields.Name}.
              </h2>
              <div>
                <img
                  src=${carData.fields.Image[0].thumbnails.large.url}
                  alt="car image"
                  width="70%"
                  height="70%"
                />
              </div>
              <p
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: gray;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 500;
                  font-family: sans-serif;
                "
              >
                Please review the following information before your appointment:
              </p>
            </td>
          </tr>
          <tr>
            <td align="">
              <ul>
                <li
                  style="
                    color: gray;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    font-family: sans-serif;
                    margin: 10px 0px;
                  "
                >
                  Arrive 15 minutes prior to your scheduled time
                </li>
                <li
                  style="
                    color: gray;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    font-family: sans-serif;
                    margin: 10px 0px;
                  "
                >
                  Drivers must bring a valid driver's license
                </li>
                <li
                  style="
                    color: gray;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    font-family: sans-serif;
                    margin: 10px 0px;
                  "
                >
                  You may invite up to three guests to ride along
                </li>
                <li
                  style="
                    color: gray;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    font-family: sans-serif;
                    margin: 10px 0px;
                  "
                >
                  An Advisor will request that you read and sign the <a
                    href="javascript:void(0)"
                    style="color: red; text-decoration: none"
                    >Test Drive Agreement</a
                  >
                </li>
              </ul>
              <p
                style="
                  color: gray;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 500;
                  font-family: sans-serif;
                  line-height: 21px;
                "
              >
                Dealership Advisors will be available during your appointment
                should you need any assistance. Please be mindful that we are
                practicing social distancing in addition to other recommended
                precautionary measures.
              </p>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p
                style="
                  color: gray;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 500;
                  font-family: sans-serif;
                  line-height: 21px;
                "
              >
                If you have any questions, contact us at ${
                  rooftopData && rooftopData.fields && rooftopData.fields.Phone
                } or
                <span
                  style="
                    color: red;
                    text-decoration: none;
                  "
                >
                  ${
                    rooftopData &&
                    rooftopData.fields &&
                    rooftopData.fields.Email
                  }</span
                >
                We look forward to seeing you soon.
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </body>
</html>

`;
};

export { getEmailTemplate, getSmsTemplate };
