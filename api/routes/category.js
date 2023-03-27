const express = require('express');
const router = express.Router();
const Category = require("../models/Category");




//GET


router.get("/", async (req,res) => {

        try {


            const categories = await (await Category.find()).reverse();


            res.status(200).json(categories);


            
        } catch (error) {


            res.status(500).json("something went wrong");
            
        }



})


//POST

router.post("/", async (req,res) => {


    const category = Category(req.body);

    console.log(req.body);


    try {


        const savedCategory = await category.save();

        res.status(200).json(savedCategory);
        
    } catch (error) {


        res.status(500).json(error);
        
    }
})


//DELETE


router.delete("/:id", async(req,res) => {


    try {
        
            await Category.findByIdAndDelete(req.params.id);

            res.status(200).json("annoucement deleted successfully");
         
    } catch (error) {

        res.status(500).json("something went wrong");
        
    }
})




module.exports = router;