import Axios from 'axios';
import moment from 'moment';

import { getEmailTemplate, getSmsTemplate } from './../utils/reminderTemplate';

export default async (req, res) => {
  const {
    title = 'Test Drive Booked',
    description = 'Test Description',
    location = 'Test Location',
    // startTime = tomorrowDateEpoch,
    recipientPhone = '12093221696',
    userData,
    carData,
    rooftopData,
    dealerData,
    selectedTime,
    selectedDate,
    currentTimeDifference,
    selectedDateEpoch,
  } = req.body;

  const apiKey = process.env.DEV_NYLAS_API_KEY;

  console.log('api key ', apiKey);

  try {
    const apiUrl = 'https://api.nylas.com/workflows';
    console.log(
      'date log ',
      typeof currentTimeDifference,
      typeof selectedDateEpoch
    );

    let startTime = selectedDateEpoch;
    let endTime = selectedDateEpoch;
    let timeDiff = currentTimeDifference;
    console.log('date log ', startTime, endTime, timeDiff);

    const htmlTemplate = getEmailTemplate(
      carData,
      rooftopData,
      location,
      selectedTime,
      selectedDate
    );

    const smsCurrent = getSmsTemplate(
      'curr',
      userData,
      carData,
      rooftopData,
      selectedTime,
      selectedDate
    );
    const smsDay = getSmsTemplate(
      'day',
      userData,
      carData,
      rooftopData,
      selectedTime,
      selectedDate
    );
    const smsHour = getSmsTemplate(
      'hour',
      userData,
      carData,
      rooftopData,
      selectedTime,
      selectedDate
    );
    // console.log(htmlTemplate);

    const getPhoneNumber = () => {
      let number = userData.fields.Phone;

      if (number.length === 11 && number.charAt(0) === '1') {
        return userData.fields.Phone;
      } else {
        return 1 + '' + number.substr(0, number.length);
      }
    };

    let postData = {
      template: 'calendar-event-reminder',
      data: {
        create_calendar_event: {
          calendar_id: '2chz4enym2c851mxo6bf8ocxm',
          when: {
            start_time: parseInt(startTime),
            end_time: parseInt(endTime) + 1800,
          },
          title: title,
          description: description,
          location: location,
          participants: [
            {
              name: `${
                userData.fields.FirstName + ' ' + userData.fields.LastName
              }`,
              email: userData.fields.Email,
              status: 'yes',
              phone_number: getPhoneNumber(),
              comment: 'string',
            },
          ],
        },
        reminders: [
          {
            // event book reminder
            type: 'email',
            time_before_event: timeDiff,
            subject: `Confirmation:  Your  ${carData.fields.Name} TEST DRIVE`,
            body: htmlTemplate,
          },
          {
            // 24 hour reminder
            type: 'email',
            time_before_event: '1440',
            subject: `Reminder:  Your  ${carData.fields.Name} TEST DRIVE`,
            body: htmlTemplate,
          },
          {
            // an hour reminder
            type: 'email',
            time_before_event: '60',
            subject: `TODAY:  Your  ${carData.fields.Name} TEST DRIVE`,
            body: htmlTemplate,
          },
          {
            // event book reminder
            type: 'sms',
            time_before_event: timeDiff,
            message: `${smsCurrent.substr(0, 140)}`,
          },
          {
            // 24 hour reminder
            type: 'sms',
            time_before_event: '1440',
            message: `${smsDay.substr(0, 140)}`,
          },
          {
            // an hour reminder
            type: 'sms',
            time_before_event: '60',
            message: `${smsHour.substr(0, 140)}`,
          },
        ],
      },
    };
    const resData = await Axios.post(apiUrl, postData, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    // const resData = await fetch(apiUrl, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${apiKey}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(postData),
    // });

    res.statusCode = 200;
    res.json(resData.data);
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
    res.json({
      msg: err,
    });
  }
};
