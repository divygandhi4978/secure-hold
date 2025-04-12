const express = require("express");
const router = express.Router();
const Data = require("../models/Data");
var cors = require("cors");

router.use(express.json());
router.use(cors());

//@desc Add new data
router.post("/add", async function (req, res) {
  const { userId, site, username, password } = req.body;

  const checkJson = {
    userId: userId,
    site: site,
    username: username,
    password: password,
  };

  const exist = await Data.find(checkJson);

  //Check existance , if not then insert
  if (exist.length == 0) {
    await Data.insertOne(req.body);
    res.send("Data Added");
  } else {
    res.send("Data already exists");
  }
});

// @desc update data
router.post("/update", async function (req, res) {
  const oldJson = req.body.oldJson;
  const newJson = { ...req.body.newJson, date: Date.now() };

  await Data.updateOne(oldJson, { $set: { ...newJson } });

  res.send("Update Done");
});

// @desc delete data
router.delete("/delete", async function (req, res) {
  const filter = req.body;

  await Data.deleteOne(filter);
  res.send("Deleted");
});

// @desc find all the data available for user
router.get("/find-all", async function (req, res) {
  const response = await Data.find({ userId: req.query.id });
  res.json(response);
});

// @desc find a single data
router.get("/findone-site", async function (req, res) {
  const response = await Data.find({
    userId: req.body.id,
    site: req.body.site,
  });
  res.json(response);
});

module.exports = router;
