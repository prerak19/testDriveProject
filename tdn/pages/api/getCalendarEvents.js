import Axios from 'axios';

export default async (req, res) => {
  const { query } = req;
  try {
    let url = `https://calendly.com/api/booking/event_types/AFD5NB4PJEV3GYU2/calendar/range?timezone=${
      query.timezone || 'Asia%2FCalcutta'
    }&diagnostics=false&range_start=${query.firstDay}&range_end=${
      query.lastDay
    }`;
    const response = await Axios.get(url);
    res.statusCode = 200;
    res.json(response.data.days);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};
