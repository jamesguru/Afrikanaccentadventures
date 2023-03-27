const express = require("express");

const router = express.Router();

const Blog = require("../models/Blog");


//CREATE

router.post("/", async (req, res) => {
  const newBlog = Blog(req.body);

  try {
    const Blog = await newBlog.save();

    res.status(200).json(Blog);
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
});

//UPDATED

router.put("/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE

router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);

    res.status(200).json("Package has been deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET Package

router.get("/find/:id", async (req, res) => {
  const id = req.params.id;

  try {
    
    
    const Blogs = await Blog.findById(id);

    res.status(200).json(Blogs);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET RELATED


router.get("/", async (req, res) => {
  const qNew = req.query.new;

  const qCategory = req.query.category;

  const qSearch = req.query.search;

  const page = req.query.page;

  const limit = req.query.limit;

  try {
    let Blogs;

    if (qNew) {
        Blogs = await Blog.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      Blogs = await Blog.find({ categories: { $in: [qCategory] } })
        .limit(limit * 1)
        .skip((page - 1) * limit);
    } else if (qSearch) {
      Blogs = await Blog.find({
        $text: {
          $search: qSearch,
          $caseSensitive: false,
          $diacriticSensitive: false,
        },
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
    } else {
      Blogs = await Blog.find();
    }

    res.status(200).json(Blogs);
  } catch (error) {
    res.status(200).json(error);
  }
});
module.exports = router;

