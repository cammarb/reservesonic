import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import studiosRoute from "./routes/studios.js";
import roomsRoute from "./routes/rooms.js";

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


// Middlewares:
// functions that have access to the request, response object, next

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/studios", studiosRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMessage = err.message || "Custom error message.";
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack
    });
});

app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
});