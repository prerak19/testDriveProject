import { leadTableBase } from './../../utils/airtable';

export default async (req, res) => {
  const {
    query: { userId },
  } = req;
  try {
    const userData = await leadTableBase.find(userId);
    res.statusCode = 200;
    res.json({ id: userData.id, fields: userData.fields });
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};
