import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5000;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = mongoose.connect(process.env.DB, dbOptions);

app.get("/", (req, res) => res.send("hello world"));

const router = express.Router();

router.get("/api/results", async (req, res) => {
  try {
    res.status(200).send("this is return from /api/results");
  } catch (err) {
    res.status(401).send(err);
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(router)

app.listen(process.env.PORT || port, () => {
  console.log("test running at port " + port);
});
