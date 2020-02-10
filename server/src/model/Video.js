import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required"
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId, // 각 데이터 Row는 Id를 가진다
      ref: "VideoComment" // 어느 Document(테이블) 에서 가져올 건지(참조할 건지)
    }
  ]
});

const model = mongoose.model("Video", VideoSchema);

export default model;
