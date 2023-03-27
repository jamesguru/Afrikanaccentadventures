const router = require('express').Router();

const Slider = require("../models/Slider");


//CREATE



router.post('/' ,async(req,res) =>{


    const newSlider = Slider(req.body);


    try {


        const savedSlider = await newSlider.save();

        res.status(200).json(savedSlider);
        
    } catch (error) {


        res.status(500).json('something went wrong')
        
    }



})


//GET


router.get('/', async(req,res) => {



    try {


        const slider = await (await Slider.find()).reverse();

        res.status(200).json(slider);
        
    } catch (error) {


        res.status(500).json('something went wrong');
        
    }



})


//DELETE

router.delete('/:id', async(req,res) =>{


    try {


        await Slider.findByIdAndDelete(req.params.id);

        res.status(200).json("slider has been successfully deleted");
        
    } catch (error) {


        res.status(500).json('something went wrong');
        
    }


})










module.exports = router;
