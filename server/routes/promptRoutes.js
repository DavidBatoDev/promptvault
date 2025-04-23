// server/routes/promptRoutes.js
import express from 'express';
import {
  createPrompt,
  getPrompts,
  getPromptById,
  updatePrompt,
  deletePrompt
} from '../controllers/promptControllers.js';

const router = express.Router();

router.post('/', createPrompt);
router.get('/', getPrompts);
router.get('/:id', getPromptById);
router.put('/:id', updatePrompt);
router.delete('/:id', deletePrompt);

export default router;
