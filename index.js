import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import axios from "axios";

import userRoute from "./src/routes/user.js";
import questionRoute from "./src/routes/question.js";
import cors from "./src/cors.js";

dotenv.config();
axios.defaults.baseURL = "https://concept-api2.herokuapp.com"

const app = express();
const port = 5000;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.DB, dbOptions);
mongoose.set("useCreateIndex", true)


//middleware
app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

//routes
app.use(userRoute);
app.use(questionRoute);

app.listen(process.env.PORT || port, () => {
  console.log("test running at port " + port);
});
