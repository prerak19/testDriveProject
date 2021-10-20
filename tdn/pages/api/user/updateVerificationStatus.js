import { leadTableBase } from '../utils/airtable';

export default async (req, res) => {
  const {
    UserID = 'recSubqlo3rs94JZs',
    IDVerified = true,
    IDVerificationToken = '123ABC',
  } = req.body;
  try {
    const data = await leadTableBase.update([
      {
        id: UserID,
        fields: {
          IDVerified,
          IDVerificationToken,
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
