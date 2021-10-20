import { brandsTableBase, minifyRecords } from './utils/airtable';

export default async (req, res) => {
  try {
    const carBrands = await brandsTableBase
      .select({ view: 'Grid view' })
      .firstPage();
    const minifiedBrandRecords = minifyRecords(carBrands);
    res.statusCode = 200;
    res.json(minifiedBrandRecords);
    // res.json(carRecords);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};
