const { Router } = require('express')
const crypto = require('crypto');
const router = Router();
require('dotenv').config()
const otpTemplate  = require('../Mail/MailTemplate')
const zod = require('zod');
const { sendMail } = require('../Mail/SendMail');

// Email Sending part
let userOtpMap = {};

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

    // Send otp using mail
    try {
      sendMail(email, "OTP Verification Email", otpTemplate(otp));
      return res.status(201).json({
        success: true,
        message: "OTP Send successfull."
      })
    } catch (error) {
      console.log(error.message)
      return res.status(511).json({
        success: false,
        message: "Error while sending Otp"
      })
    }
  
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
