const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv/config");

// import routes

const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Middlewares
// a function that executes when routes are being hit
/*app.use("/posts", () => {
  console.log("This is a middle ware for posts");
});*/
//ROUTES

app.get("/", (req, res) => {
  res.send("We are home");
});

// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to DB")
);
// HOW do we start listening to the server
app.listen(3000);
