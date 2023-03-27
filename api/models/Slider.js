const mongoose = require('mongoose');


const sliderSchema = mongoose.Schema({



    title:{
        type:String,

        require:true,
    },

    

    img:{

        type:String,

        require:true,


    },

    id:{

        type:String,

        require:true,


    },

    desc:{

        type:String,

        require:true,
    }


})



module.exports = mongoose.model("Slider", sliderSchema);