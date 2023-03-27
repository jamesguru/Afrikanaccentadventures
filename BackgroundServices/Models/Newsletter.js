const mongoose = require("mongoose");

const NewsletterSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },

    status: { type: Number, default: 0 },
  },

  { timestamps: true }
);
NewsletterSchema.index({ "$**": "text" });
module.exports = mongoose.model("Gallery", NewsletterSchema);
