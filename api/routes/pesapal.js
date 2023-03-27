const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const axios = require("axios");
const request = require("superagent");
const { v4: uuidv4 } = require("uuid");

dotenv.config();

var pesapal = require("pesapal")({
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  testing: false,
});

router.post("/payment", async (req, res) => {
  try {
    var postParams = {
      oauth_callback: "http://localhost:5000/api/pesapal/callback",
    };
    var requestData = {
      Amount: req.body.Amount,
      Description: req.body.Description,
      Type: req.body.Type,
      Reference: req.body.Reference,
      PhoneNumber: req.body.PhoneNumber,
    };

    var url = pesapal.postDirectOrder(postParams, requestData);

    res.send(url);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

router.get("/callback", async (req, res) => {
  // const reference = req.body.reference;
  // const transaction = req.body.transaction;
  // const status = req.body.status;

  res.status(200).json({success: "payment successful" });
});

module.exports = router;
