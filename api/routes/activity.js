const express = require("express");

const router = express.Router();

const Activity = require("../models/Activity");

const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./verifyToken");

//CREATE

router.post("/", async (req, res) => {
  const newActivity = Activity(req.body);

  try {
    console.log("trying ...");
    const Activity = await newActivity.save();
    console.log(Activity);

    res.status(200).json(Activity);
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
});

//UPDATED

router.put("/:id", async (req, res) => {
  try {
    const updatedActivity = await Activity.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedActivity);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE

router.delete("/:id", async (req, res) => {
  try {
    await Activity.findByIdAndDelete(req.params.id);

    res.status(200).json("Package has been deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET Package

router.get("/find/:id", async (req, res) => {
  const id = req.params.id;

  try {
    console.log(id);
    console.log("package");
    const activities = await Activity.findById(id);

    console.log(activities);

    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET RELATED

router.get("/related/:id", async (req, res) => {
  try {
    const Package = await Package.findById(req.params.id).exec();

    const related = await Package.find({
      _id: { $ne: Package._id },

      brand: Package.brand,
    })
      .limit(50)
      .populate("categories")
      .exec();

    res.status(200).json(related);
  } catch (error) {
    res.status(200).json(error);
  }
});

//GET ALL PackageS

router.get("/", async (req, res) => {
  const qNew = req.query.new;

  const qCategory = req.query.category;

  const qSearch = req.query.search;

  const page = req.query.page;

  const limit = req.query.limit;

  try {
    let Activities;

    if (qNew) {
      Activities = await Activity.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      Activities = await Activity.find({ categories: { $in: [qCategory] } })
        .limit(limit * 1)
        .skip((page - 1) * limit);
    } else if (qSearch) {
      Activities = await Package.find({
        $text: {
          $search: qSearch,
          $caseSensitive: false,
          $diacriticSensitive: false,
        },
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
    } else {
      Activities = await Activity.find().limit(6);
    }

    res.status(200).json(Activities);
  } catch (error) {
    res.status(200).json(error);
  }
});

// RATING

router.put("/ratings/:packageId", async (req, res) => {
  const { star, name, comment, postedBy } = req.body;

  try {
    if (star) {
      const postedRating = await Package.findByIdAndUpdate(
        req.params.PackageId,
        { $push: { ratings: { star, name, comment, postedBy } } },
        { new: true }
      );

      res.status(201).json(postedRating);
    } else {
      res.status(401).json("no rating");
    }
  } catch (error) {
    res.status(500).json("something went wrong");
  }
});

module.exports = router;
