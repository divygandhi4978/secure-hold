const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true, // force SSL
    tlsAllowInvalidCertificates: false, // tighten SSL validation
  });
};

const d = () => connect();

module.exports = d;
