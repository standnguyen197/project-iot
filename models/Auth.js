var mongoose = require('mongoose');

var AuthSchema = new mongoose.Schema({
  email: String,
  name: String,
  phone: String,
  address: String,
  birthday: String,
  touchid: String,
  password: String,
  rfid: String,
  role_id: {type:String , default: '0'},
  created_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('auths', AuthSchema);
