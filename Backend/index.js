import express from "express";
import cors from "cors";
import { config as configDotenv } from "dotenv";
import mongoose from "mongoose";
import complaintRoutes from "./Routes/complaintsRoutes.js";
import userRoutes from "./Routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


configDotenv();

const PORT = process.env.PORT || 5000;

app.use('/api/complaint', complaintRoutes);
app.use('/api/users', userRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
