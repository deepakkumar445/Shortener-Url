import mongoose from "mongoose";
import shortid from "shortid";

const ShortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    requried: true,
    default: shortid.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});


exports  ShortUrl = mongoose.Model("ShortUrl", ShortUrlSchema);