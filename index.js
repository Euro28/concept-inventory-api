import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors"

import userRoute from "./src/routes/user.js"

dotenv.config();

const app = express();
const port = 5000;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

cors({credentials: true, origin:true})
const connection = mongoose.connect(process.env.DB, dbOptions);

app.get("/", (req, res) => res.send("hello world"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use(userRoute)

app.listen(process.env.PORT || port, () => {
  console.log("test running at port " + port);
});
