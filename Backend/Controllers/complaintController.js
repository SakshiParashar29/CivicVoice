import express from "express";
import Complaint from "../Models/ComplaintModel.js"
import ApiError from "../Utils/ApiError.js"
import ApiResponse from "../Utils/ApiResponse.js"

export const getAllComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find();

        const responseData = complaints.map((c) => ({
            id: c._id,
            title: c.title,
            description: c.description,
            upvotes: c.upvotes.length,
            status: c.status
        }));

        return res.status(200).json(new ApiResponse(200, true, "Complaints fetch successfully", responseData));
    } catch (error) {
        return res.status(500).json(new ApiError(500, error.message, null));
    }
}

export const saveComplaint = async (req, res) => {
    try {
        const { title, description, category } = req.body;

        if (!title || !description || !category) {
            return res.status(500).json(new ApiError(500, "Invalid Crendentials", null));
        }

        const complaint = new Complaint({
            title,
            description,
            category
        })

        await complaint.save();

        return res.status(201).json(new ApiResponse(201, true, "Complaints sent successfully", complaint));
    } catch (error) {
        return res.status(500).json(new ApiError(500, error.message, null));
    }
}


export const updateUpvote = async (req, res) => {
    try {
        const complaintId = req.params.id; 
        const {userId} = req.body;  

        if (!userId) {
            return res.status(400).json(new ApiError(400, null, "User ID is required"));
        }

        const complaint = await Complaint.findById(complaintId);

        if (!complaint) {
            return res.status(404).json(new ApiError(404, null, "Complaint not found"));
        }

        if (complaint.upvotes.includes(userId)) {
            return res.status(400).json(new ApiError(400, null, "User already upvoted"));
        }

        complaint.upvotes.push(userId);
        await complaint.save();

        return res.status(200).json(
            new ApiResponse(200, true, "Upvote successful", { upvotes: complaint.upvotes.length })
        );

    } catch (error) {
        return res.status(500).json(
            new ApiError(500, null, error.message || "Failed to update upvote")
        );
    }
};
