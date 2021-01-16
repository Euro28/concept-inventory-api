import mongoose from "mongoose";

const Schema = mongoose.Schema;

const conceptSchema = new Schema({
  concept: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  explanation: {
    type: String,
    required: true,
    trim: true,
  },
});

const Concept = mongoose.model("Concept", conceptSchema);

export default Concept;
