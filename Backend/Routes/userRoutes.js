import express from 'express'
import { getUserProfile, SignIn, SignUp } from '../Controllers/userController.js';
import authmiddleware from "../Middlerwares/Auth.js"

const router = express.Router();

router.post('/signin', SignIn);//checked
router.post('/signup', SignUp);//checked
router.get('/profile', authmiddleware, getUserProfile);

export default router;