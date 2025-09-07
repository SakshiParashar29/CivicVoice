import express from 'express'
import { getAllComplaints, getComplaintStats, saveComplaint, updateUpvote } from '../Controllers/complaintController.js';
import authMiddleware from "../Middlerwares/Auth.js"


const router = express.Router();

router.get('/get-complaints', authMiddleware, getAllComplaints);//checked
router.post('/save-complaint', authMiddleware, saveComplaint);//checked
router.put('/update-upvote/:id', updateUpvote);//checked
router.get('/getStats', authMiddleware, getComplaintStats);


export default router;