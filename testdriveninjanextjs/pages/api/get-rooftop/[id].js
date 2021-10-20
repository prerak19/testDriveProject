import { rooftopTableBase, minifyRecords } from '../utils/airtable';

export default async (req, res) => {
  // const querystring = require('querystring');
  // let parsedObject = querystring.parse(req.url, '?', '=');
  const {
    query: { id },
  } = req;
  try {
    // const carRecord = await carsTableBase.find(parsedObject.carId);
    const rooftop = await rooftopTableBase.find(id);
    res.statusCode = 200;
    res.json({ id: rooftop.id, fields: rooftop.fields });
    // res.json(carRecords);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};
