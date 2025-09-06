import express from "express";
import cors from "cors";
import { config as configDotenv } from "dotenv";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

configDotenv();

const PORT = process.env.PORT || 5000;

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
