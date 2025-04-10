const mongoose = require("mongoose");

const userlog = mongoose.Schema({
  userId: { type: String, require },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("UserLog", userlog);
