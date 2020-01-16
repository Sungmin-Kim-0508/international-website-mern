import express from "express";
import routes from "../routes";
import {
  getSignIn,
  signOut,
  getSignUp,
  postSignIn,
  postSignUp,
  getUnauthorized,
  getUserInfo,
  postGoogleLogin,
  postFacebookLogin
} from "../controllers/userController";
import { privateAuth } from "../middleware";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send("home"));
globalRouter.get(routes.about, (req, res) => res.send("about"));
globalRouter.get(routes.contact, (req, res) => res.send("contact"));

globalRouter.get(routes.signIn, getSignIn);
globalRouter.post(routes.signIn, postSignIn);

globalRouter.get(routes.signOut, signOut);

globalRouter.get(routes.signUp, getSignUp);

/**
 *  @route            POST /signUp
 *  @description      Register new user
 */
globalRouter.post(routes.signUp, postSignUp, postSignIn);

/**
 *  @route            POST /auth/google
 *  @description      Login with Google
 */

globalRouter.post(routes.authGoogle, postGoogleLogin);

/**
 *  @route            POST /auth/facebook
 *  @description      Login with Facebook
 */
globalRouter.post(routes.authFacebook, postFacebookLogin);

globalRouter.get("/unauthorized", getUnauthorized);
globalRouter.get("/userInfo", privateAuth, getUserInfo);

export default globalRouter;
