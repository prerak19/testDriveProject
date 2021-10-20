// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { carsTableBase, minifyRecords } from './utils/airtable';

export default async (req, res) => {
  try {
    const carRecords = await carsTableBase.select({}).firstPage();
    const minifiedCarRecords = minifyRecords(carRecords);
    res.statusCode = 200;
    res.json(minifiedCarRecords);
    // res.json(carRecords);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};
