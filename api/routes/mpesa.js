const { default: axios } = require("axios");
const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
let unirest = require("unirest");
dotenv.config();

const generateToken = async (req, res, next) => {
  const secret = process.env.MPESA_SECRET_KEY;
  const consumer = process.env.MPESA_CONSUMER_KEY;

  const Auth = new Buffer.from(`${consumer}:${secret}`).toString("base64");

  await axios
    .get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          authorization: `Basic ${Auth}`,
        },
      }
    )
    .then((response) => {
      token = response.data.access_token;
      console.log(token);
      next();
    })
    .catch((error) => {
      console.log(error);
    });
};

router.post("/", generateToken, async (req, res) => {
  const amount = req.body.amount;
  const phone = req.body.phone.substring(1);

  const date = new Date();
  const timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + (date.getDate() + 1)).slice(-2) +
    ("0" + (date.getHours() + 1)).slice(-2) +
    ("0" + (date.getMinutes() + 1)).slice(-2) +
    ("0" + (date.getSeconds() + 1)).slice(-2);

  const shortcode = process.env.MPESA_PAYBILL;
  const passkey = process.env.MPESA_PASSKEY;

  const password = new Buffer.from(shortcode + passkey + timestamp).toString(
    "base64"
  );

  await unirest(
    "POST",
    "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
  )
    .headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    })
    .send(
      JSON.stringify({
        BusinessShortCode: 174379,
        Password:
          "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMwMTIxMDExMTMy",
        Timestamp: "20230121011132",
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: `254${phone}`,
        PartyB: "174379",
        PhoneNumber: `254${phone}`,
        CallBackURL:
          "https://0e9f-102-215-76-91.eu.ngrok.io/api/payment/callback",
        AccountReference: "African Accent Adventures",
        TransactionDesc: "Payment of Tour Hiking",
      })
    )
    .end((res) => {
      if (res.error) throw new Error(res.error);
      console.log(res.raw_body);
    });
});

router.post("/callback", (req, res) => {
  const callbackData = req.body;

  console.log(callbackData.Body);

  if (callbackData.Body.stkCallback.CallbackMetadata) {
    return res.json("ok");
  }

  console.log(callbackData.Body.stkCallback.CallbackMetadata);
});

module.exports = router;

/*await axios
    .post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: "174379",
        Password:
          "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline", //CustomerBuyGoodsOnline
        Amount: amount,
        PartyA: `254${phone}`,
        PartyB: "174379",
        PhoneNumber: `254${phone}`,
        CallBackURL: "https://0e9f-102-215-76-91.eu.ngrok.io/api/payment/callback",
        AccountReference: `254${phone}`,
        TransactionDesc: "Test",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((data) => {
      console.log(data.data);
    })
    .catch((error) => {
     console.log(error);
    });*/
