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

router.patch("/api/questions", async (req,res) => {
  try {
    const { question, title } = req.body;
    const quiz = await Quiz.find({title})
    
    quiz.pages[0].elements.push(question);

    await quiz.save();

    res.status(200).send(quiz);
  } catch(err) {
    res.status(500).send(err);

  }
})

router.get("/api/concepts", async (req, res) => {
  try {
    const concepts = await Concept.find({});
    res.status(200).send(concepts);
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

// router.patch("/api/concepts", async (req, res) => {
//   try {
//     const { concept, explanation } = req.body;
//     const editedConcept = await Concept.findOne({ concept });
//     editedConcept.explanation = explanation;

//     await editedConcept.save();

//     res.status(200).send(editedConcept);
//   } catch (err) {
//     res.status(401).send(err);
//   }
// });

export default router;
