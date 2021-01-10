import express from "express";
import cookieParser from "cookie-parser"

import User from "../models/User.js";

const router = express.Router();

router.use(cookieParser())

router.get("/api/results", async (req, res) => {
  try {
    console.log("req.body", req.body.name)
    console.log("the pure cookies are ", req.headers.cookie)
    const { name } = req.cookies;
    const user = await User.findOne({ name });
    res.status(200).send(user.results);
  } catch (err) {
    res.status(401).send(err);
  }
});

export default router;
