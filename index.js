import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import userRoute from "./src/routes/user.js";

dotenv.config();

const app = express();
const port = 5000;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = mongoose.connect(process.env.DB, dbOptions);
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/", (req, res) => res.send("hello world"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(userRoute);

app.listen(process.env.PORT || port, () => {
  console.log("test running at port " + port);
});
