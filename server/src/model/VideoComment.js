import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  video: {
    type: mongoose.Schema.Types.ObjectId, // 각 데이터 Row는 Id를 가진다
    ref: "Video" // 어느 Document(테이블) 에서 가져올 건지(참조할 건지)
  }
});

const model = mongoose.model("Comment", CommentSchema);

export default model;
