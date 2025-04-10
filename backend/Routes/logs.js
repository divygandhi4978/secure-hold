const express = require("express");
const router = express.Router();
const UserLogs = require("../models/UserLogs");
const cors = require('cors')

router.use(express.json());
router.use(cors())

router.get("/getlog", async function (req, res) {
  console.log(req.query.id);
  const response = await UserLogs.find({ userId: req.query.id });

  console.log(response[0]);
  
  res.json(response[0]);
});

router.post("/setLog", async function (req, res) {
  await UserLogs.deleteOne({ userId: req.body.userId });
  await UserLogs.insertOne({ userId: req.body.userId ,date:Date.now()});
  res.send("Log Updated");
});

module.exports = router;
