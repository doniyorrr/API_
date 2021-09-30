const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require('./config');
const path = require("path");
const port = 3000;
const r_Index = require("./routers/index");
const r_Directors = require('./routers/direc');
const r_User = require("./routers/user");
const token = require('./midleware/verify');
const app = express();

const db = require("./helper/db")();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("api_secret_key", config.api_secret_key);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


app.use( r_User);
app.use(token)
app.use("/api/movies" ,r_Index);
app.use("/api/directors", r_Directors);

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`server http://localhost:${port} sa ishladi`);
});


module.exports = app