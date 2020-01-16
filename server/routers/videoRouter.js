import express from "express";
import routes from "../routes";

import {
  videos,
  getUpload,
  videoDetail,
  videoSearch,
  postUpload,
  postEditVideo,
  getEditVideo,
  postDeleteVideo,
  getDeleteVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

videoRouter.get(routes.home, videos);

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Detail
videoRouter.get(routes.videoDetail, videoDetail);

// Edit
videoRouter.get(routes.editVideo, getEditVideo);
videoRouter.post(routes.editVideo, postEditVideo);

// Delete
videoRouter.get(routes.deleteVideo, getDeleteVideo);
videoRouter.post(routes.deleteVideo, postDeleteVideo);

// Search
videoRouter.get(routes.searchVideo, videoSearch);

export default videoRouter;
