const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    arrivaldate: { type: String, required: true },
    company: { type: String },
    country: { type: String, required: true },
    streetaddress: { type: String },
    postcode: { type: String },
    town: { type: String },
    email: { type: String, required: true },
    comment: { type: String },
    packages: { type: Array },
    accomodation: { type: String },
    uid: { type: String, required: true },
    type: { type: String },
    adults: { type: Number },
    children: { type: Number },
    agent: { type: String },
    parks: { type: String },
    days: { type: Number },
    accomodation: { type: String },
    additionalinfo: { type: String },
    type: { type: String },
    budget: { type: Number },
    total: { type: Number },
    currency: { type: String },
    phone: { type: Number, required: true },
    status: { type: Number, default: 0 },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
