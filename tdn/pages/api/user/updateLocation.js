import { leadTableBase } from '../utils/airtable';

export default async (req, res) => {
  const {
    UserID = 'recSubqlo3rs94JZs',
    Address = 'test address',
    AtHome = false,
  } = req.body;
  try {
    let data;
    if (AtHome) {
      data = await leadTableBase.update([
        {
          id: UserID,
          fields: {
            Address,
            'At Home': true,
          },
        },
      ]);
    } else {
      data = await leadTableBase.update([
        {
          id: UserID,
          fields: {
            Address: '',
            'At Home': false,
          },
        },
      ]);
    }

    res.statusCode = 200;
    res.json(data);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};
