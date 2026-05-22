import mongoose from 'mongoose';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my-express-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the Mongoose instance
const db = mongoose.connection;

// Handle connection errors
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Handle successful connection
db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default db;