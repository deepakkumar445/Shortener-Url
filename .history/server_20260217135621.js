import express from "express";
import mongoose from "mon";
const app = express();

// route
app.get("/", (req, res) => {
  res.send("Welcome to UrlShortener ");
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
