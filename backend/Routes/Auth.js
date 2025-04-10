const express = require("express");
const router = express.Router();
const Auth = require("../models/Authentication");
const cors = require("cors");

router.use(express.json());
router.use(cors());

router.post("/check", async function (req, res) {
  const checkData = req.body;

  let d = await Auth.find(checkData);

  if (d.length == 1) {
    console.log("Verified");
    res.json(d[0]);
  } else {
    console.log('not exist');
    
    res.json([]);
  }
});

router.post("/register", async function (req, res) {
  const registerData = req.body;

  let d = await Auth.find({ email: registerData.email });
  if (d.length == 1) {
    res.json([]);
  } else {
    console.log(registerData);

    const dd = await Auth.insertOne(registerData);
    res.json(dd);
  }
});

//Make Update user info api

module.exports = router;
