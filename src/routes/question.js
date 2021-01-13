import express from "express";

import JSON from "../questions.js"

const router = express.Router();

router.get("/api/questions", async (req, res) => {
  try {
	  res.status(200).send(JSON)
  } catch (err) {
  	res.status(401).send(err);
  }
});

export default router;
