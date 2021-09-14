const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newSchema = new Schema({
  title: {
    type: String,
    requierd:true,

  },
  category:String,
  country:String,
  year:Number,
  director_id: Schema.Types.ObjectId,
  imdb_score: Number,

  // {'title':'foo', 'category':'bar', 'country':'Uzbekistan', year:1990, director:"id", imdb_score: 9.7 }
});

module.exports = mongoose.model("schema", newSchema);
