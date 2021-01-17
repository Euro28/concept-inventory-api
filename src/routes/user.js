import express from "express";
import axios from "axios";

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

router.post("/api/register", async (req, res) => {
  try {
    const exists = await User.findOne({ name: req.body.name });
    if (exists) {
      res.status(409).send("User already exists");
    } else {
      const user = new User(req.body);
      await user.save();
      res.status(201).send(user);
    }
  } catch (err) {
    res.status(500).send("Failed to register user");
  }
});

router.post("/api/login", async (req, res) => {
  try {
    if (req.query.name) req.body.name = req.query.name;

    const user = await User.findOne({ name: req.body.name });
    if (!user) {
      res.status(204).send();
    } else {
      res
        .status(200)
        .cookie("name", user.name, {
          maxAge: 1000 * 60 * 10,
          httpOnly: false,
        })
        .send({ user });
    }
  } catch (err) {
    res.status(401).send(err);
  }
});

router.get("/api/results", getUser, async (req, res) => {
  try {
    // const { name } = req.query;
    // const user = await User.findOne({ name });
    res.status(200).send(req.query.user.results);
  } catch (err) {
    res.status(401).send(err);
  }
});

router.post("/api/results", async (req, res) => {
  try {
    //get actual survey and get array of objects where first
    //field of object is question value and second is array of correct answers
    const quiz = await axios.get(
      "https://concept-api2.herokuapp.com/api/questions"
    );
    console.log(
      quiz.data[0].pages[0].elements.map((question) => ({
        correct: question.correctAnswer,
        questionValue: question.valueName
      }))
    );

    const { name } = req.query;
    const { results } = req.body;

    console.log(results);

    const user = await User.findOne({ name });
    user.results = results;

    await user.save();

    res.status(200).send(user);
  } catch (err) {
    res.status(401).send(err);
  }
});

router.patch("/api/takenQuiz", async (req, res) => {
  try {
    const { name } = req.query;
    const user = await User.findOne({ name });
    user.takenQuiz = true;

    await user.save();

    res.status(200).send(user);
  } catch (err) {
    res.status(401).send(err);
  }
});

export default router;
