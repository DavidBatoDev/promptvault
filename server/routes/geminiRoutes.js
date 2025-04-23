// server/routes/geminiRoutes.js
import express from 'express';
import { sendMessageToGemini } from '../controllers/geminiController.js';

const router = express.Router();

router.post('/send', sendMessageToGemini);

export default router;
