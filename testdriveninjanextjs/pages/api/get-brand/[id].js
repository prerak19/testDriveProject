import { brandsTableBase } from '../utils/airtable';

export default async (req, res) => {
  // const querystring = require('querystring');
  // let parsedObject = querystring.parse(req.url, '?', '=');
  const {
    query: { id },
  } = req;
  try {
    const brand = await brandsTableBase.find(id);
    res.statusCode = 200;
    res.json({ id: brand.id, fields: brand.fields });
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};
