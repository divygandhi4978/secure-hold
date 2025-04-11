const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  
};

const d = () => connect();

module.exports = d;
