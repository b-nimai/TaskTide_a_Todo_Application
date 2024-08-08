const { Router } = require('express')
const crypto = require('crypto');
const router = Router();
const otpTemplate  = require('../Mail/MailTemplate')
const zod = require('zod');
const { sendMail } = require('../Mail/SendMail');

// Email Sending part
let userOtpMap = {};

const emailSchema = zod.string().email();
// Send Otp
router.post('/sendOtp', async(req, res) => {
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
      await sendMail(email, "OTP Verification Email", otpTemplate(otp));
      return res.status(201).json({
        success: true,
        message: "OTP Send successfull."
      })
    } catch (error) {
      return res.status(511).json({
        success: false,
        message: error.message
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
