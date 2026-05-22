import dotenv from 'dotenv';
dotenv.config();

const defaultConfig = {
  PORT: process.env.PORT || 3001,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/my-express-app',
};

export default defaultConfig;