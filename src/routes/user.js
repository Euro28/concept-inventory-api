import express from "express"

import cors from "cors"
import User from "../models/User.js"

const router = express.Router();

router.use(cors())

router.get("/api/results", async (req, res) => {
  try {
    const user = await User.findOne({})
    res.status(200).send(user);
  } catch (err) {
    res.status(401).send(err);
  }
});

export default router;