const mongoose = require("mongoose");

const auth = mongoose.Schema({
  userId: { type: String, require },
  name: { type: String, require },
  email: { type: String, require },
  password: { type: String, require },
});

module.exports = mongoose.model("Auth", auth);
