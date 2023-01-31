const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      maxLength: [40, "Name can't exceed 40 characters."],
      minLength: [3, "Name should have more than 3 characters."],
    },
    last_name: {
      type: String,
      maxLength: [40, "Name can't exceed 40 characters."],
      minLength: [3, "Name should have more than 3 characters."],
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
      validate: [validator.isEmail, "Please enter a valid email."],
    },
    mobile: {
      type: String,
      validate: [/^[6-9]\d{9}$/, "Invalid Mobile Number"],
      required: [true, "Please Enter Your Mobile Number!"],
      unique: [true, "Mobile Number is already registered!"],
    },
    gender: { type: String, default: "Male" },
    marital_status: { type: String, default: "Single" },
    otp: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("user", userSchema);
