const router = require('express').Router();

const Comment = require('../models/Comments');











// GET


router.get('/', async (req,res) =>{


    try {

        const comments = await Comment.find();


        res.status(200).json(comments);

        
    } catch (error) {

        res.status(500).json(error);
        
    }



})


//CREATE


router.post('/', async (req,res) =>{


    const newComment = Comment(req.body);

    try {

        const comment = await newComment.save();

        res.status(200).json(comment);
        
    } catch (error) {


        res.status(500).json(error);
        
    }
})


//DELETE

router.delete('/:id', async (req,res) => {

    try {
        

        await Comment.findByIdAndDelete(req.params.id);

        res.status(200).json('successfully deleted');

    } catch (error) {

        res.status(500).json(error);
        
    }
})


//FIND PRODUCT COMMENTS

router.get('/find/:id', async (req,res) =>{

    
    try {

        const Comments = await (await Comment.find({productId:req.params.id})).reverse();

        res.status(200).json(Comments);
        
    } catch (error) {
        

        res.status(500).json(error);
    }
})


//UPDATE

router.put('/:id', async (req,res) => {


    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true});


        res.status(200).json(updatedComment);

    } catch (error) {


        res.status(500).json(error);
        
    }
})


module.exports=router;