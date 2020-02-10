import express from "express";
import routes from "../routes";
import { privateAuth, privateAuthAdmin } from "../middleware";
import {
  getFilesList,
  getStudentsFilesPagination,
  postFileUploadStudents,
  postDeleteFileStudents
} from "../controllers/forStudentsController";

const forStudentsRouter = express.Router();

/**
 *  METHOD:       GET
 *  ROUTES:       /forStudents
 */

forStudentsRouter.get(routes.home, getFilesList);

/**
 *  METHOD:       GET
 *  ROUTES:       /forStudents/student-page
 */

forStudentsRouter.get(routes.studentPage, getStudentsFilesPagination);

/**
 *  METHOD: POST
 *  Routes: "/forStudents/upload"
 */

forStudentsRouter.post(
  routes.upload,
  privateAuth,
  privateAuthAdmin,
  postFileUploadStudents
);

/**
 *  METHOD: POST
 *  Routes: /forStudents/:id/delete-students
 */

forStudentsRouter.post(
  routes.deleteStudents,
  privateAuth,
  privateAuthAdmin,
  postDeleteFileStudents
);

export default forStudentsRouter;
