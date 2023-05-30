import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import AsyncHandler from 'express-async-handler';

// Define Passport strategy
AsyncHandler(
  passport.use(
    // Create new LocalStrategy object with the usernameField set to 'email' instead of username
    new LocalStrategy(
      { usernameField: 'email' },
      async (email, password, done) => {
        // Fetch user from database based on email
        const user = await User.findOne({ email: email });

        // If user doesn't exist, return error
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }

        // If user exists, compare passwords
        const isMatch = await bcrypt.compare(password, user.password);

        // If passwords don't match, return error
        if (!isMatch) {
          return done(null, false, { message: 'Incorrect password.' });
        }

        // If passwords match, return user and proceed to authUser (next middleware)
        return done(null, user);
      }
    )
  )
);

// Serialize the user object and store it in the session
passport.serializeUser((user, done) => {
  // Call the `done` callback with the serialized user data
  console.log('serializeUser');
  done(null, user.id);
});

// Deserialize the user object from the session
passport.deserializeUser(async (id, done) => {
  // Retrieve the user object based on the serialized data (user id)

  const user = await User.findById(id);
  console.log('deserializeUser');

  user ? done(null, user) : done({ message: 'User not found' }, null);
});

export default passport;
