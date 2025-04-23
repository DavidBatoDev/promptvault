// server/models/Prompt.js
import mongoose from "mongoose";

const promptSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  prefix: {
    type: String,
    required: true
  },
  tags: [String]
}, { timestamps: true });

export default mongoose.model("Prompt", promptSchema);
