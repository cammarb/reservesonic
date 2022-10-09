import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("This it the room endpoint.");
});

export default router;