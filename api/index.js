import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Connected to MongoDB.");
    } catch (error) {
        throw error;
    }
};

// app.get("/", (req, res) => {
//     res.send("Hello first request!");
// })

app.use("/auth", authRoute);

app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
});