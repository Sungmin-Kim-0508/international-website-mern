import mongoose from "mongoose";

const NewsComment = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.name()
  },
  news: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "News"
  }
});

const model = mongoose.model("NewsComment", NewsComment);

export default model;
