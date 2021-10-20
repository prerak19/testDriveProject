import Axios from 'axios';

export default async (req, res) => {
  const { frontBase64, backBase64 } = req.body;
  try {
    const data = {
      authenticate: true,
      dualsidecheck: true,
      apikey: '0wsfu2vkYUs3YWYL7uSvKTSMIslGBv0N',
      file_base64: frontBase64,
      file_back_base64: backBase64,
    };

    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      maxContentLength: 52428800,
      maxBodyLength: 52428800,
    };
    const apiUrl = 'https://api.idanalyzer.com';
    const resData = await Axios.post(apiUrl, data, options);
    res.statusCode = 200;
    res.json(resData.data);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb',
    },
  },
};
