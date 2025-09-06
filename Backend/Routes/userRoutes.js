import express from 'express'
import { SignIn, SignUp } from '../Controllers/userController.js';

const router = express.Router();

router.post('/signin', SignIn);//checked
router.post('/signup', SignUp);//checked

export default router;