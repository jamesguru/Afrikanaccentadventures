const mongoose = require("mongoose");



const CommentsSchema = mongoose.Schema({

    name:{type:String, required: true},

    comment:{type:String, required:true},

    productId:{type:String, required:true}
    
},

{timestamps: true},



);




module.exports = mongoose.model("Comments", CommentsSchema);