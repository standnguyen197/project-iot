var mongoose = require('mongoose');

var HistorySchema = new mongoose.Schema({
  name: String,
  email: String,
  touchid: String,
  rfid: String,
  created_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('historys', HistorySchema);
