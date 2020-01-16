import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  newsComments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NewsComment"
    }
  ]
});

NewsSchema.plugin(mongoosePaginate);

const model = mongoose.model("News", NewsSchema);

export default model;
