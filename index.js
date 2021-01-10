import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import userRoute from "./src/routes/user.js";
import cors from "./src/cors.js"

dotenv.config();

const app = express();
const port = 5000;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = mongoose.connect(process.env.DB, dbOptions);

//middleware
app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use(userRoute);

app.listen(process.env.PORT || port, () => {
  console.log("test running at port " + port);
});
