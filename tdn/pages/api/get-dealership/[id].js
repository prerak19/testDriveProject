import { dealersTableBase } from '../utils/airtable';

export default async (req, res) => {
  // const querystring = require('querystring');
  // let parsedObject = querystring.parse(req.url, '?', '=');
  const {
    query: { id },
  } = req;
  try {
    const dealer = await dealersTableBase.find(id);
    res.statusCode = 200;
    res.json({ id: dealer.id, fields: dealer.fields });
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};
