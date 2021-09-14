const mongoose = require('mongoose');

module.exports = () =>{
    mongoose.connect(
      "mongodb+srv://user:123qwe123qwe@cluster0.p0thb.mongodb.net/test"
    );

    const db = mongoose.connection;
    db.on("open", () => {
      console.log("MongoDB running");
    });
    db.on("error", (err) => {
      console.log("MongoDB ERROR running", err);
    });
}














