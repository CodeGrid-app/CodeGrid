import express from 'express';
import colors from 'colors';
import connectDB from './config/db.js';

const app = express();
connectDB();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(5000, () =>
  console.log('Server running on port 5000'.cyan.bold.underline)
);
