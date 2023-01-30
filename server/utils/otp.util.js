const fast2sms = require("fast-two-sms");
require("dotenv").config();

exports.generateOTP = (otp_length) => {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < otp_length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

exports.sendOTP = async ({ message, contactNumber }) => {
  try {
    const r = await fast2sms.sendMessage({
      authorization: process.env.fast2sms,
      message,
      numbers: [contactNumber],
    });
    console.log(r);
  } catch (e) {
    console.log(e.message);
  }
};
