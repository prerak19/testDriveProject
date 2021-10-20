import { leadTableBase } from '../utils/airtable';

export default async (req, res) => {
  const {
    UserID = 'recSubqlo3rs94JZs',
    Date = '2021-01-30T04:09:00.000Z',
  } = req.body;
  try {
    const data = await leadTableBase.update([
      {
        id: UserID,
        fields: {
          Date,
        },
      },
    ]);
    res.statusCode = 200;
    res.json(data);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};
