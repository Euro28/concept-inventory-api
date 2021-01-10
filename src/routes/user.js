import express from "express";

import User from "../models/User.js";

const router = express.Router();

const getUser = async (req, res, next) => {
  try {
    const { name } = req.query;
    const user = await User.findOne({ name });
    if (user) {
      req.query.user = user;
    }
    next();
  } catch (err) {
    res.status(401).send(err);
  }
};

router.post("/api/register", getUser, async (req, res) => {
  try {
    const { name } = req.query;
    const exists = await User.findOne({ name });
  } catch (err) {}
});

router.get("/api/results", getUser, async (req, res) => {
  try {
    console.log("req.query.user", req.query.user);
    const { name } = req.query;
    const user = await User.findOne({ name });
    res.status(200).send(user.results);
  } catch (err) {
    res.status(401).send(err);
  }
});

export default router;
