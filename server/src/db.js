import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Development connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// Production connection
// mongoose.connect(process.env.MONGO_URL_PROD, {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// });

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌  Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);