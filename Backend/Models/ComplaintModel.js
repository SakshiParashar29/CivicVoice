import mongoose from "mongoose";


const complaintSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    upvotes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    status: {
        type: String,
        enum: ["pending", "inProgress", "resolved"],
        default: "pending",
    }

}, { timestamps: true })

const Complaint = new mongoose.model("Complaint", complaintSchema);
export default Complaints;