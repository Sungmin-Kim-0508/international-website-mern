import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const VolunteerFileSchema = new mongoose.Schema({
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

VolunteerFileSchema.plugin(mongoosePaginate);

const model = mongoose.model("VolunteersFile", VolunteerFileSchema);

export default model;
