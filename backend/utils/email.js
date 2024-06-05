import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'animos24.blockchaininfinity@gmail.com',
    pass: 'qgeq uegm uqrn izlv'
  }
});

export const sendOtpEmail = async (email, otp) => {
  try {
    await transporter.sendMail({
      from: 'animos24.blockchaininfinity@gmail.com', // Change this to your email
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`
    });
  } catch (error) {
    console.log('Error sending email:', error);
    throw error; // Throw the error to handle it in the route
  }
};
