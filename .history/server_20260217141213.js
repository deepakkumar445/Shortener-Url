import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/Url-shortener")
  .then(() => console.log("db is connected"))
  .catch((err) => console.log(err));

app.set("view engine ", "ejs");
// route
app.get("/", (req, res) => {
  res.send("Welcome to UrlShortener");
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
