import Axios from 'axios';

export default async (req, res) => {
  const { query } = req;

  const apiKey = process.env.DEV_NYLAS_API_KEY;

  try {
    let url = `https://api.nylas.com/calendars/availability`;

    let postData = {
      duration_minutes: 30,
      start_time: 1618991199,
      end_time: 1619164014,
      interval_minutes: 10,
      emails: [],
      free_busy: [],
    };

    const response = await Axios.post(url, postData, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
    res.statusCode = 200;
    res.json(response.data);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};
