import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import connectDB from './config/db.js';
import passport from 'passport';
import userRoutes from './routes/userRoutes.js';
import session from 'express-session';

dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express
const app = express();

// Initialize middleware
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000, // 1 hour in milliseconds
    },
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send(`API is running...`);
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Server running on port ${process.env.port}`.cyan.bold.underline)
);
