import express from "express";

import JSON from "../questions.js"

const router = express.Router();

import Quiz from "../models/Quiz.js"


router.get("/api/questions", async (req, res) => {
  try {
    const quiz = await Quiz.find({})
	  res.status(200).send(quiz)
  } catch (err) {
  	res.status(401).send(err);
  }
});

export default router;
