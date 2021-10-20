import Axios from 'axios';

export default async (req, res) => {
  const { fileData } = req.body;
  try {
    const data = {
      apikey: process.env.ID_ANALYZER_API_KEY,
      file_base64: fileData,
    };

    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
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
