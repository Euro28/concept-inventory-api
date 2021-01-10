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
  results: {},
  takenQuiz: {
    type: Boolean,
    required: true,
    default: false,
  }
});

const User = mongoose.model("User", userSchema);

export default User;