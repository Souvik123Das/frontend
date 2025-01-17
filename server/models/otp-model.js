const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: { type: Number, required: true },
  expiry: {
    type: Date,
    default: Date.now,
    expires: 300 // 5 minutes
  },
});


const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;