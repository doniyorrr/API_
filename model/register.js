const mongoose = require('mongoose');
const Schema = mongoose.Schema

const regSchema = new Schema ({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        minlength:5
    },
})


module.exports = mongoose.model('user' , regSchema)






















