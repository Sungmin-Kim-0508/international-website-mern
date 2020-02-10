import mongoose from "mongoose";
import mongoosePagination from "mongoose-paginate-v2";

const StudentFileSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: "File Name is required"
  },
  description: {
    type: String
  },
  fileUrl: {
    type: String,
    required: "File URL is required"
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

StudentFileSchema.plugin(mongoosePagination);

const model = mongoose.model("StudentsFile", StudentFileSchema);

export default model;
