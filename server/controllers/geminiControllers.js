// server/controllers/geminiController.js
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export const sendMessageToGemini = async (req, res) => {
  try {
    const { message } = req.body;

    const response = await axios.post(
      `${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: message }] }]
      }
    );

    const geminiReply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No reply generated.';

    res.status(200).json({ reply: geminiReply });
  } catch (error) {
    console.error(error?.response?.data || error.message);
    res.status(500).json({ message: 'Failed to get response from Gemini API' });
  }
};
