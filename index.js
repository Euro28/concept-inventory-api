import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import userRoute from "./src/routes/user.js";

dotenv.config();

const app = express();
const port = 5000;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// const corsOptions = {
//   origin: ["http://localhost:3000"],
//   credentials: true,
// };

const connection = mongoose.connect(process.env.DB, dbOptions);

app.get("/", (req, res) => res.send("hello world"));

// app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(userRoute);

app.listen(port, () => {
  console.log("test running at port " + port);
});
