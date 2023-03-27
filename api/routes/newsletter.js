const express = require("express");

const router = express.Router();
const Newsletter = require("../models/NewsLetter");

//GET

router.get("/", async (req, res) => {
  try {
    const newsletters = await (await Newsletter.find()).reverse();

    res.status(200).json(newsletters);
  } catch (error) {
    res.status(500).json(error);
  }
});

//POST

router.post("/", async (req, res) => {
  const newsletter = Newsletter(req.body);
  console.log(req.body);
  try {
    const savedNewslettter = await newsletter.save();

    res.status(201).json(savedNewslettter);
  } catch (error) {
    res.status(500).json("something went wrong");
  }
});

//DELETE

router.delete("/:id", async (req, res) => {
  try {
    await Newsletter.findByIdAndDelete(req.params.id);

    res.status(200).json("Newslettter was deleted");
  } catch (error) {
    res.status(500).json("something went wrong");
  }
});

//

router.put("/:id", async (req, res) => {
  try {
    const updatedNewsletter = await Newsletter.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedNewsletter);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
