import User from "./model/User";
import multer from "multer";
const jwt = require("jsonwebtoken");

const multerVideo = multer({ dest: "uploads/videos/" });

export const uploadVideo = multerVideo.single("videoFile");

// const gc = new Storage({
//   keyFilename: path.join(
//     __dirname,
//     "./international-website-mern-5ca9fba931ea.json"
//   ),
//   projectId: "international-website-mern"
// });

// gc.getBuckets().

export const privateAuth = (req, res, next) => {
  const token = req.header("x-auth-token");
  // Check for token
  if (!token) {
    console.log("No token, authorization denied");
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({
      msg: "Token is not valid"
    });
  }
};

// Check if user is admin

export const privateAuthAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user.admin) {
      console.error("You are not admin");
      return res.status(401).json({ msg: "Invalid Authentication Access" });
    }
    next();
  } catch (error) {
    console.log("Internal Error");
    res.status(500).send(`Internal Error from getUserInfo : ${error}`);
  }
};
