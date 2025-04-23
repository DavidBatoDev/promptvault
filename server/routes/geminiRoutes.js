// server/routes/geminiRoutes.js
import express from 'express';
import { sendMessageToGemini } from '../controllers/geminiControllers.js';

const router = express.Router();

router.post('/send', sendMessageToGemini);

export default router;
