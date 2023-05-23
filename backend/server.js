import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express
const app = express();

// Initialize middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`API is running...`);
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Server running on port ${process.env.port}`.cyan.bold.underline)
);
