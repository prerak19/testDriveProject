import Axios from 'axios';

export default async (req, res) => {
  //   const { fileData } = req.body;
  try {
    // const data = {
    //   apikey: process.env.ID_ANALYZER_API_KEY,
    //   file_base64: fileData,
    // };

    // const options = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };
    const apiUrl = 'https://api.nylas.com/workflows';
    // const resData = await Axios.post(apiUrl, data, options);

    let postData = {
      template: 'calendar-event-reminder',
      data: {
        create_calendar_event: {
          calendar_id: '2chz4enym2c851mxo6bf8ocxm',
          when: {
            start_time: 1618638078,
            end_time: 1618641678,
          },
          title: "Let's meet",
          description: "Don't forget to wear masks folks.",
          location: 'Coffee Shop at mandalore',
          participants: [
            {
              name: 'Rax Rai',
              email: 'raja.rai@algoscale.com',
              status: 'yes',
              phone_number: '15149998877',
              comment: 'string',
            },
          ],
        },
        reminders: [
          {
            type: 'email',
            time_before_event: '600',
            subject: "Don't forget",
            body: 'Reminding you about our meeting.',
          },
        ],
      },
    };
    const resData = await Axios.post(apiUrl, postData, {
      headers: {
        Authorization: 'Bearer tS0X4TV2iUM9ZSaAQaLU8NBc6YwbD9',
        'Content-Type': 'application/json',
      },
    });

    res.statusCode = 200;
    res.json(resData.data);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};
