import express from 'express';
import { Signup, Login } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/signup', Signup);

router.post('/login', Login);

export default router;
