import { leadTableBase } from '../utils/airtable';

export default async (req, res) => {
  const {
    UserID = 'recSubqlo3rs94JZs',
    FirstName = 'TestFirstName',
    LastName = 'TextLastName',
    Email = 'test@testdrive.com',
    Phone = '2093221696',
    CommunicationMethod = 'Text',
    AgreementConsent = true,
    CommunicationConsent = true,
  } = req.body;
  try {
    const data = await leadTableBase.update([
      {
        id: UserID,
        fields: {
          FirstName,
          LastName,
          Email,
          Phone,
          CommunicationMethod,
          AgreementConsent,
          CommunicationConsent,
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
