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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(userRoute)

app.listen(process.env.PORT || port, () => {
  console.log("test running at port " + port);
});
