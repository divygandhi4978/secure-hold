const express = require("express");
const router = express.Router();
const Auth = require("../models/Authentication");
const cors = require("cors");

router.use(express.json());
router.use(cors());

// @desc Login Details check
router.post("/check", async function (req, res) {
  const checkData = req.body;

  let d = await Auth.find(checkData);

  if (d.length == 1) {
    res.json(d[0]);
    console.log(`User Logged In : ${d[0].email}`);
  } else {
    res.json([]);
  }
});

// @ desc Register new user
router.post("/register", async function (req, res) {
  const registerData = req.body;

  let d = await Auth.find({ email: registerData.email });
  if (d.length == 1) {
    res.json([]);
  } else {
    const dd = await Auth.insertOne(registerData);
    console.log(`User Registered : ${dd.email}`);
    res.json(dd);
  }
});

module.exports = router;
