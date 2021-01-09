import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config()

const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("hello world"));

app.listen(process.env.PORT || port, () => {
  console.log("test running at port " + port);
});
