const express = require('express');
const router = express.Router();
const Annoucement = require("../models/Annoucement");




//GET


router.get("/", async (req,res) => {

        try {


            const annoucement = await Annoucement.find().limit(1);


            res.status(200).json(annoucement);


            
        } catch (error) {


            res.status(500).json("something went wrong");
            
        }



})


//POST

router.post("/", async (req,res) => {


    const annoucement = Annoucement(req.body);

    console.log(req.body);


    try {


        const savedAnnoucement = await annoucement.save();

        res.status(200).json(savedAnnoucement);
        
    } catch (error) {


        res.status(500).json(error);
        
    }
})


//DELETE


router.delete("/:id", async(req,res) => {


    try {
        
            await Annoucement.findByIdAndDelete(req.params.id);

            res.status(200).json("annoucement deleted successfully");
         
    } catch (error) {

        res.status(500).json("something went wrong");
        
    }
})




module.exports = router;