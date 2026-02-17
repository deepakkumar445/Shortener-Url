import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/Url-shortener")
  .then(() => console.log("db is connected"))
  .catch((err) => console.log(err));

app.set("view engine ", "ejs");
app.use(express.urlencoded({ extended: false }));

// route
app.get("/", async (req, res) => {
  const shortUrls = await shorturl.find();
  res.render("index", { shortUrls: shortUrls });
});

app.post("/shortUrls", async (req, res) => {
  await shorturl.create({ full: req.body.fullUrl });

  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await shorturl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shorturl.full);
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
