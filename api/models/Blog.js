const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema(
  {
    title: { type: String, required:true},

    metadesc: { type: String, required: true },

    desc: { type: String, required: true },

    img: { type: String, required: true },
  },
  { timestamps: true }
);

BlogSchema.index({ "$**": "text" });

module.exports = mongoose.model("Blog", BlogSchema);
