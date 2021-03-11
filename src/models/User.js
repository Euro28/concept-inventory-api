import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    match: [/^[a-zA-Z0-9]+$/, "name is invalid"],
    required: true,
  },
  results: [{
    quizTitle: String,
    quizResults: {}
  }],
  takenQuiz: {
    type: Boolean,
    required: true,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true,
  },
  class: String,
  conceptsToTake: [
    {
      title: String,
      concepts: [{

        type: String,
      }
      ]
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
