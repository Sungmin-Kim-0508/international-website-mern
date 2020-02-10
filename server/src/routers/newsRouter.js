import express from "express";
import routes from "../routes";
import {
  newsDetail,
  newsHome,
  getUploadNews,
  getNewsSearch,
  postUploadNews,
  getEditNews,
  postEditNews,
  getDeleteNews,
  postDeleteNews,
  getNewsPagination
} from "../controllers/newsController";
import { privateAuth, privateAuthAdmin } from "../middleware";

const newsRouter = express.Router();

newsRouter.get(routes.home, newsHome);

/**
 *  METHOD:     GET
 *  ROUTE:      /news/news-page
 */
newsRouter.get(routes.newsPage, getNewsPagination);

// Search

newsRouter.get(routes.search, getNewsSearch);

// News Detail
/**
 *  METHOD:     GET
 *  ROUTE:      /news/:id
 *  Params :     id
 */

newsRouter.get(routes.newsDetail, newsDetail);

// Upload

newsRouter.get(routes.uploadNews, getUploadNews);

/**
 *  METHOD:     POST
 *  ROUTE:      /news/upload-news
 *  BODY :      title, description, _id
 */
newsRouter.post(
  routes.uploadNews,
  privateAuth,
  privateAuthAdmin,
  postUploadNews
);

// Edit

newsRouter.get(routes.editNews, getEditNews);
newsRouter.post(routes.editNews, privateAuth, privateAuthAdmin, postEditNews);

// Delete

newsRouter.get(routes.deleteNews, getDeleteNews);
newsRouter.post(
  routes.deleteNews,
  privateAuth,
  privateAuthAdmin,
  postDeleteNews
);

export default newsRouter;
