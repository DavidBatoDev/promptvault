// server/controllers/geminiController.js
import dotenv from 'dotenv';
import axios from 'axios';
import Prompt from '../models/Prompt.js';

dotenv.config();

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export const sendMessageToGemini = async (req, res) => {
  try {
    const { message, prompt_id } = req.body;

    // 1. Get system_prompt using prompt_id
    let systemPrompt = '';
    if (prompt_id) {
      const prompt = await Prompt.findById(prompt_id);
      if (!prompt) return res.status(404).json({ message: 'Prompt not found' });
      systemPrompt = prompt.system_prompt;
    }

    // 2. Construct the content with system_prompt + user message
    const contents = [
      { role: 'user', parts: [{ text: `${systemPrompt}\n\n${message}`.trim() }] }
    ];

    // 3. Send to Gemini API
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`,
      { contents }
    );

    const geminiReply =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No reply generated.';

    res.status(200).json({ reply: geminiReply });
  } catch (error) {
    console.error(error?.response?.data || error.message);
    res.status(500).json({ message: 'Failed to get response from Gemini API' });
  }
};
