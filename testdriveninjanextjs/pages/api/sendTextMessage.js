const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken);

export default async (req, res) => {
  let { firstName, lastName, date, phone } = req.body;
  try {
    // convert date to readable format
    const dateObj = new Date(date);
    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let dateString = `${dateObj.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })}, ${days[dateObj.getDay()]}, ${dateObj.toLocaleString('default', {
      month: 'short',
    })} ${dateObj.getDate()}`;

    // remove 0 from phone number if present
    if (phone.charAt(0) === '0') {
      phone = phone.substring(1);
    }
    // console.log(phone);
    const data = await client.messages.create({
      body: `Hey ${firstName} ${lastName} \n Your test drive is set for ${dateString} \n  `,
      from: '+12564149231',
      to: `+1${phone}`,
    });
    res.statusCode = 200;
    res.json(data);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: err });
  }
};
