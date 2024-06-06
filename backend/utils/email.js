import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sisonjohnalbert0422@gmail.com',
    pass: 'jort jzyi buyd gqsn'
  }
});

export const sendOtpEmail = async (email, otp) => {
  try {
    await transporter.sendMail({
      from: 'sisonjohnalbert0422@gmail.com', // Change this to your email
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`
    });
  } catch (error) {
    console.log('Error sending email:', error);
    throw error;
  }
};
