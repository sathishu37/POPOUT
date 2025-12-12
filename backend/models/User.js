const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String, age: Number, dob: String, address: String, mobile: String, email: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', UserSchema);
