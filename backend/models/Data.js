const mongoose = require("mongoose");

const data = mongoose.Schema({
  userId: { type: String, require },
  site: { type: String, require },
  username: { type: String, require },
  password: { type: String, require },
  notes: { type: String, require },
  tags: { type: String, require },
  date:{type:Date,default:Date.now}
});

module.exports = mongoose.model("Data", data);
