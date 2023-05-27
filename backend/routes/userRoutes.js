import express from 'express';
import passport from '../config/passportConfig.js';
const router = express.Router();
import { authUser } from '../controllers/userControllers.js';

router.route('/login').post(passport.authenticate('local'), authUser);

export default router;
