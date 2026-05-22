import express from 'express';
import mongoose from 'mongoose';

import userRoutes from './routes/userRoutes.js';
import authMiddleware from './middleware/authMiddleware.js';
import errorMiddleware from './middleware/errorMiddleware.js';
import defaultConfig from './config/env.js';
import authenticate from './middleware/authMiddleware.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authMiddleware);

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = defaultConfig.PORT;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

export default app;