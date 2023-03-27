const mongoose = require("mongoose");

const PromoSchema = mongoose.Schema({
  image: {
    type: String,

    require: true,
  },

  title: {
    type: String,

    require: true,
  },

  desc: {
    type: String,

    require: true,
  },

  status: { type: Number, default: 0 },
});

module.exports = mongoose.model("Promo", PromoSchema);
