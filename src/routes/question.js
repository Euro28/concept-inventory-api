import express from "express";

const router = express.Router();

import Quiz from "../models/Quiz.js";
import Concept from "../models/Concept.js";

router.get("/api/questions", async (req, res) => {
  try {
    const quiz = await Quiz.find({});
    res.status(200).send(quiz);
  } catch (err) {
    res.status(401).send(err);
  }
});

router.patch("/api/questions", async (req, res) => {
  try {
    const { question, title } = req.body;
    const quiz = await Quiz.findOne({ title });

    quiz.pages[0].elements.push(question);
    console.log(question.misconception)
    console.log(quiz.concepts.includes(question.misconception));
    if (!quiz.concepts.includes(question.misconception)) {
      quiz.concepts.push(question.misconception);
    }
    await quiz.save();

    res.status(200).send(quiz);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch("/api/questions/remove", async (req, res) => {
  try {
    const { quizTitle, title } = req.body;

    const quiz = await Quiz.findOne({ title: quizTitle });

    const removedQuestion = quiz.pages[0].elements.filter(
      (ques) => ques.title !== title
    );

    quiz.pages[0].elements = removedQuestion;

    await quiz.save();

    res.status(200).send(quiz);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/api/concepts", async (req, res) => {
  try {
    const concepts = await Concept.find({});
    const formattedConcepts = concepts.reduce(
      (acc, cur) => ({
        ...acc,
        [cur.concept]: cur.explanation,
      }),
      {}
    );
    res.status(200).send(formattedConcepts);
  } catch (err) {
    rse.status(401).send(err);
  }
});

router.patch("/api/concepts", async (req, res) => {
  try {
    const { concept, explanation } = req.body.concept;

    const exists = await Concept.findOne({ concept });

    if (exists) {
      res.status(409).send("Concept already exists");
    } else {
      const newConcept = new Concept({ concept, explanation });
      await newConcept.save();
      res.status(201).send(newConcept);
    }
  } catch (err) {
    res.status(500).send("Failed to Register new Concept");
  }
});

router.post("/api/newQuiz", async (req, res) => {
  try {
    const { title } = req.body;
    const newQuiz = new Quiz({
      title,
      pages: [
        {
          name: "page1",
          elements: [],
        },
      ],
    });

    await newQuiz.save();
    res.status(201).send(newQuiz);
  } catch (err) {
    res.status(500).send("Failed to create new Concept Inventory");
  }
});

export default router;
