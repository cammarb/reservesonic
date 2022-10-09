import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("This is the studios endpoint.");
});

export default router;