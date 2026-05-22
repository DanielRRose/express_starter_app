import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';
import authMiddleware from './middleware/authMiddleware';
import errorMiddleware from './middleware/errorMiddleware';
import config from './config/env';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorMiddleware.errorHandler);

// Start the server
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});