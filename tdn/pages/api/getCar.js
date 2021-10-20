import { carsTableBase, minifyRecords } from './utils/airtable';

export default async (req, res) => {
  const querystring = require('querystring');
  let parsedObject = querystring.parse(req.url, '?', '=');
  try {
    const carRecord = await carsTableBase.find(parsedObject.carId);
    res.statusCode = 200;
    res.json(carRecord);
    // res.json(carRecords);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};
