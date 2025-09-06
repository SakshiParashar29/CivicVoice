import express from 'express'
import { getAllComplaints, saveComplaint, updateUpvote } from '../Controllers/complaintController.js';



const router = express.Router();

router.get('/get-complaints', getAllComplaints);//checked
router.post('/save-complaint', saveComplaint);//checked
router.put('/update-upvote/:id', updateUpvote);



export default router;