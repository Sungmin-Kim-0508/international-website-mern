import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import newsRouter from "./routers/newsRouter";
import videoRouter from "./routers/videoRouter";
import apiRouter from "./routers/apiRouter";
import path from "path";

const app = express();

// import "./passport";
import forStudentsRouter from "./routers/forStudentsRouter";
import forVolunteerRouter from "./routers/forVolunteerRouter";

app.use(helmet());
app.use(
  fileUpload({
    createParentPath: true
  })
);
app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../build/static")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/static", "index.html"));
});

app.use(routes.home, globalRouter);
app.use(routes.news, newsRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.forStudent, forStudentsRouter);
app.use(routes.forVolunteers, forVolunteerRouter);
app.use(routes.api, apiRouter);

export default app;
