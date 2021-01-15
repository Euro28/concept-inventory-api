import mongoose from "mongoose";

const Schema = mongoose.Schema;

const answerSchema = new Schema({
  value: String,
  text: String,
});

const questionSchema = new Schema({
  type: {
    type: String,
    default: "checkbox",
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  valueName: {
    type: String,
    required: true,
  },
  correctAnswer: [String],
  isRequired: {
    type: Boolean,
    default: true,
  },
  choices: [answerSchema],
});

const pageSchema = new Schema({
  name: {
    type: String,
  },
  elements: [questionSchema],
});

const quizSchema = new Schema({
  title: {
    type: String,
    unique: true,
    trim: true,
    match: [/^[a-zA-Z0-9]+$/, "name is invalid"],
    required: true,
  },
  maxTimeToFinish: {
    type: Number,
    default: 10000,
  },
  pages: [pageSchema],
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
