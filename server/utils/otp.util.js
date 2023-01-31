const fast2sms = require("fast-two-sms");
require("dotenv").config();

exports.generateOTP = (otp_length) => {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < otp_length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  // console.log("OTP:", OTP);
  return OTP;
};

exports.sendOTP = ({ message, contactNumber }) => {
  // console.log(message, contactNumber);
  fast2sms
    .sendMessage({
      authorization: process.env.FAST2SMS,
      message,
      numbers: [contactNumber],
    })
    .then((response) => {
      console.log(JSON.stringify(response));
    })
    .catch((error) => console.log(error));
};
