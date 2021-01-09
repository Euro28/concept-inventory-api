import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import userRoute from "./src/routes/user.js"

dotenv.config();

const app = express();
const port = 5000;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

const connection = mongoose.connect(process.env.DB, dbOptions);

app.get("/", (req, res) => res.send("hello world"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(allowCrossDomain)
app.use(userRoute)

app.listen(process.env.PORT || port, () => {
  console.log("test running at port " + port);
});
