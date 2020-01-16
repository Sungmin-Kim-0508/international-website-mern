import express from "express";
import routes from "../routes";
import {
  getFilesListVolunteers,
  getFilesPagination,
  postFileUploadVolunteers,
  postDeleteFileVolunteers
} from "../controllers/forVolunteerController";

const forVolunteerRouter = express.Router();

/**
 *  METHOD:       GET
 *  ROUTES:       /forVolunteers
 */
forVolunteerRouter.get(routes.home, getFilesListVolunteers);

/**
 *  METHOD:         GET
 *  ROUTES:         /forVolunteers/volunteer-page
 *  QUERY Params  : page-num, limit
 */

forVolunteerRouter.get(routes.volunteerPage, getFilesPagination);

/**
 *  METHOD: POST
 *  Routes: "/forStudents/upload"
 */
forVolunteerRouter.post(routes.upload, postFileUploadVolunteers);

/**
 *  METHOD: POST
 *  Routes: /forStudents/:id/delete-volunteers
 */

forVolunteerRouter.post(routes.deleteVolunteers, postDeleteFileVolunteers);

export default forVolunteerRouter;
