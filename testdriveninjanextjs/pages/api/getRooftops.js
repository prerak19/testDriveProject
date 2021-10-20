import { rooftopTableBase, minifyRecords } from './utils/airtable';

export default async (req, res) => {
  let rooftops = [];

  try {
    const rooftops = await rooftopTableBase.select().firstPage();
    const minifiedRecords = minifyRecords(rooftops);
    res.statusCode = 200;
    res.json(minifiedRecords);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};
