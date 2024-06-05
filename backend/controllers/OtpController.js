import { sendOtpEmail } from '../utils/email.js';

let otpStore = {}; // Temporary in-memory store for OTPs

export const sendOtp = (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ msg: 'Email is required' });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
  otpStore[email] = otp;

  sendOtpEmail(email, otp);
  res.status(200).json({ msg: 'OTP sent successfully' });
};

export const verifyOtp = (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({ msg: 'Email and OTP are required' });
  }

  if (otpStore[email] && otpStore[email] === otp) {
    delete otpStore[email]; // OTP verified, remove it from the store
    res.status(200).json({ msg: 'OTP verified successfully' });
  } else {
    res.status(400).json({ msg: 'Invalid OTP' });
  }
};
