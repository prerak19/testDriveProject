import { leadTableBase } from '../utils/airtable';

export default async (req, res) => {
  const { rooftopId = 'test' } = req.body;
  try {
    const data = await leadTableBase.create([
      {
        fields: {
          LeadID: '',
          Rooftop: [rooftopId],
        },
      },
    ]);
    res.statusCode = 200;
    res.json(data);
    // res.json(carRecords);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};
