import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: false
  },
  admin: {
    type: Boolean,
    default: false
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpires: {
    type: Date
  },
  avatarUrl: String,
  facebookId: Number,
  googleId: Number,
  newsComments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NewsComment"
    }
  ],
  news: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "News"
    }
  ],
  studentFiles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudentsFile"
    }
  ],
  volunteerFiles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VolunteersFile"
    }
  ]
});

const model = mongoose.model("User", UserSchema);

export default model;
