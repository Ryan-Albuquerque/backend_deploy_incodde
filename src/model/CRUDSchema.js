const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true
    },
    email:{
        type:String,
        required:true
    },
    job:{
        type: String,
        required: true,
    }
})


module.exports = mongoose.model("mongooseSchema", Schema)