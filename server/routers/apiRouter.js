import express from "express";
import routes from "../routes";
import { postRegisterView } from "../controllers/newsController";

const apiRouter = express.Router();

/**
 *  Method: POST
 *  Route: /api/:id/view
 */
apiRouter.post(routes.registerView, postRegisterView);

export default apiRouter;
