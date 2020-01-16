import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  changePassword,
  postEditProfile,
  postForgetPassword
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.post(`/:id${routes.editProfile}`, postEditProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.post(routes.forgetPassword, postForgetPassword);

export default userRouter;
