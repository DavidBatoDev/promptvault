// server/models/Prompt.js
import mongoose from "mongoose";

const promptSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  system_prompt: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Prompt', promptSchema);
