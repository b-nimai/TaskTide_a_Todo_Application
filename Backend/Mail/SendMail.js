const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
});

const sendMail = (email, sub, body)=> {
    const mailOptions = {
      from: 'officialnill2000@gmail.com',
      to: `${email}`,
      subject: sub,
      html: `${body}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return error.message
      } else {
        return "OTP send."
      }
    });
}
module.exports = { sendMail }