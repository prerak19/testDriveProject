import { carsTableBase, minifyRecords } from '../utils/airtable';

export default async (req, res) => {
  // const querystring = require('querystring');
  // let parsedObject = querystring.parse(req.url, '?', '=');
  const {
    query: { carId },
  } = req;
  try {
    // const carRecord = await carsTableBase.find(parsedObject.carId);
    const carRecord = await carsTableBase.find(carId);
    res.statusCode = 200;
    res.json({ id: carRecord.id, fields: carRecord.fields });
    // res.json(carRecords);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};
