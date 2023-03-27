const Promo = require("../models/Promo");

const router = require("express").Router();

//GET

router.get("/", async (req, res) => {
  try {
    const promo = await Promo.find();

    res.status(200).json(promo);
  } catch (error) {
    res.status(500).json("something went wrong");
  }
});

//POST

router.post("/", async (req, res) => {
  const promo = Promo(req.body);

  try {
    const savedPromo = await promo.save();

    res.status(200).json(savedPromo);
  } catch (error) {
    res.status(200).json("something went wrong");
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedPromo = await Promo.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedPromo);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE

router.delete("/:id", async (req, res) => {
  try {
    await Promo.findByIdAndDelete(req.params.id);

    res.status(200).json("Deleted successfully");
  } catch (error) {
    res.status(200).json("something went wrong");
  }
});

module.exports = router;
