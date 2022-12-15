const express = require("express");
const app = express();
const date = require("./middlewares/date");

app.use(express.static(__dirname + "/public"));

app.get("/Home", date, (req, res) => {
  res.sendFile(__dirname + "/public/Home.html");
});

app.get("/ContactUs", date, (req, res) => {
  res.sendFile(__dirname + "/public/ContactUs.html");
});

app.get("/OurServices", date, (req, res) => {
  res.sendFile(__dirname + "/public/OurServices.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/PageNotFound.html");
});

app.get("./public/Styles.css", (req, res) => {
  res.sendFile(__dirname + "/public/Styles.css");
});
app.listen(4000, (err) => {
  err ? console.log(err) : console.log("Server isrunning");
});