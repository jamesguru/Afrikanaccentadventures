const express = require("express");

const router = express.Router();

const Order = require("../models/Order");

const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./verifyToken");

//CREATE

router.post("/", async (req, res) => {
  const newOrder = Order(req.body);
  console.log('Helloo order')
  console.log(newOrder)

  try {
    const savedOrder = await newOrder.save();

    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPATE

router.put("/:id", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE

router.delete("/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.status(200).json("order is deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET USER ORDERS

router.get("/find/:id", async (req, res) => {
  try {
    const orders = await (
      await Order.find({ userId: req.params.id })
    ).reverse();

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL ORDERS

router.get("/", async (req, res) => {
  try {
    const orders = await (await Order.find()).reverse();

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET STATS

router.get("/income", async (req, res) => {
  const date = new Date();

  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));

  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },

      {
        $project: {
          month: { $month: "$createdAt" },

          sales: "$amount",
        },
      },

      {
        $group: {
          _id: "$month",

          total: { $sum: "$sales" },
        },
      },
    ]);

    res.status(200).json(income);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
