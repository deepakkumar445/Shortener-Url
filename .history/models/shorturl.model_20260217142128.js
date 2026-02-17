import mongoose from "mongoose";

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
  },
});
