const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: "noname",
    maxlength:[5 , 'malumot motogri kiritdingiz']
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  year:{
      type:Number,
      max:2020,
      min: 1991,
  },

});

module.exports = mongoose.model("schema", newSchema);
