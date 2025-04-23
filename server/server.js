import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import promptRoutes from './routes/promptRoutes.js';

// App initialization
dotenv.config(); // Load environment variables from .env file
const app = express(); // Create an Express application
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/prompts', promptRoutes);

connectDB() // Connect to MongoDB database

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
