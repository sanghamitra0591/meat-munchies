const express = require("express");
const User = require("../models/User.Model");
const { generateOTP, sendOTP } = require("../utils/otp.util");
const jwt = require("jsonwebtoken");
const authenticate = require("../middlewares/authenticate.middleware");
require("dotenv").config();

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  let { mobile } = req.body;
  try {
    const user = await User.findOne({ mobile });
    if (user) {
      const otp = generateOTP(6);
      await User.findByIdAndUpdate(user._id, otp);
      await sendOTP({
        message: `Your OTP is ${otp}`,
        contactNumber: user.mobile,
      });
      return res.status(201).send("OTP Sent Successfully");
    } else {
      const user = await User.create({ mobile });
      const otp = generateOTP(6);
      await User.findByIdAndUpdate(user._id, otp);
      await sendOTP({
        message: `Your OTP is ${otp}`,
        contactNumber: user.mobile,
      });
      //   jwt.sign({ user_id: user._id }, process.env.JWT_SECRET);
      return res.status(201).send("OTP Sent Successfully");
    }
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

userRouter.post("/verifyotp", async (req, res) => {
  const { otp, user_id } = req.body;
  try {
    const user = await User.findById(user_id);
    if (user.otp !== otp) {
      return res.status(400).send({
        message: "Incorrect OTP!",
      });
    }
    const token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET);
    await User.findByIdAndUpdate(user_id, { otp: "" });

    return res.status(201).send({
      message: "OTP verified successfully",
      data: {
        token,
        user_id: user._id,
      },
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = {
  userRouter,
};
