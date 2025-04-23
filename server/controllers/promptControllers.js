// server/controllers/promptController.js
import Prompt from '../models/Prompt.js';

// Create a new prompt
export const createPrompt = async (req, res) => {
  try {
    const { name, description, system_prompt } = req.body;
    const newPrompt = await Prompt.create({ name, description, system_prompt });
    res.status(201).json(newPrompt);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all prompts
export const getPrompts = async (req, res) => {
  try {
    const prompts = await Prompt.find();
    res.status(200).json(prompts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single prompt by ID
export const getPromptById = async (req, res) => {
  try {
    const prompt = await Prompt.findById(req.params.id);
    if (!prompt) return res.status(404).json({ message: 'Prompt not found' });
    res.status(200).json(prompt);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a prompt by ID
export const updatePrompt = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, system_prompt } = req.body;
    const updatedPrompt = await Prompt.findByIdAndUpdate(
      id, // Find the prompt by ID
      { name, description, system_prompt }, // Update the fields
      { new: true } // Return the updated document
    );
    if (!updatedPrompt) return res.status(404).json({ message: 'Prompt not found' });
    res.status(200).json(updatedPrompt);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a prompt by ID
export const deletePrompt = async (req, res) => {
  try {
    const deleted = await Prompt.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Prompt not found' });
    res.status(204).end(); // No content
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
