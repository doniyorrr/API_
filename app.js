const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const port = 3000;
const r_Index = require("./routers/index");
const app = express();

const db = require("./helper/db")();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/api/movies" ,r_Index);

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`server http://localhost:${port} sa ishladi`);
});
