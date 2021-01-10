import express from "express";

import User from "../models/User.js";

const router = express.Router();

router.get("/api/results", async (req, res) => {
  try {
    const { name } = req.cookies;
    const user = await User.findOne({ name });
    res.status(200).send(user.results);
  } catch (err) {
    res.status(401).send(err);
  }
});

export default router;
