const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },

    arrivaldate: { type: String, required: true },
    company: { type: String },
    country: { type: String, required: true },
    streetaddress: { type: String},
    postcode: { type: String, },
    uid: { type: String, required: true },
    town: { type: String},
    email: { type: String, required: true },
    comment: { type: String },
    packages: { type: Array, required: true },
    type: { type: String },
    total: { type: Number, required: true },

    phone: { type: Number, required: true },

    status: { type: Number, default: 0 },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
