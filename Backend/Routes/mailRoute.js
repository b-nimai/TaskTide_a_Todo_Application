const { Router } = require('express')
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const router = Router();
require('dotenv').config()
const otpTemplate  = require('./MailTemplate')
const zod = require('zod')

let userOtpMap = {};

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
});

const emailSchema = zod.string().email();
// Send Otp
router.post('/sendOtp', (req, res) => {
    const { email } = req.body;
    if(!emailSchema.safeParse(email).success) {
      return res.status(411).json({
        success: false,
        message: "Invalid email, try again"
      })
    }
    const otp = crypto.randomInt(100000, 999999).toString();
  
    userOtpMap[email] = otp;
  
    const mailOptions = {
      from: 'officialnill2000@gmail.com',
      to: email,
      subject: 'OTP Verification Email',
      html: otpTemplate(otp)
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
        return res.status(500).json({
          success: false, 
          message: error.message
        });
      } else {
        return res.status(200).json({
          success: true,
          message: 'OTP sent'
        })
      }
    });
});

// verify otp
router.post('/verifyOtp', (req, res) => {
    const { email, otp } = req.body;
  
    if (userOtpMap[email] === otp) {
      delete userOtpMap[email];
      return res.status(200).json({
        success: true,
        message: 'OTP verified'
      })
    } else {
      return res.status(400).json({
        success: false,
        message: 'Invalid OTP'
      })
    }
  });

module.exports = router
