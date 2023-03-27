const mongoose = require("mongoose");

const PackageSchema = mongoose.Schema(
  {
    title: { type: String },

    desc: { type: String, required: true },

    img: { type: String, required: true },
    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
    img4: { type: String },

    video: { type: String },

    duration: { type: String },

    originalPrice: { type: Number,require:true },

    tourtype: { type: String },
    groupsize: { type: Number },

    tourguide: { type: Number },

    overview: { type: String },

    itinenary: { type: Array,require:true },
    transport: { type: Array,require:true },
    tourfeature: { type: Array,require:true },
    exclusions: { type: Array,require:true },
    inclusions: { type: Array,require:true},
    addedvalue: { type: Array,require:true },
    nightstops: { type: Array,require:true },
    pricing: { type: Array,require:true },
    accomodation: { type: Array,require:true },
    gallery: { type: Array },
    categories: { type: Array,require:true },

    active: { type: Boolean, default: true },

    ratings: [
      {
        star: Number,

        name: { type: String },

        comment: { type: String },

        postedBy: { type: String },
      },
    ],
  },

  { timestamps: true }
);

PackageSchema.index({ "$**": "text" });

module.exports = mongoose.model("Package", PackageSchema);
