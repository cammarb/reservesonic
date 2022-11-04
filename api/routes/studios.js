import express from "express";
import Studio from "../models/Studio.js";

const router = express.Router();

// Create
router.post("/", async (req, res) => {

    const newStudio = new Studio(req.body);

    try {
        const savedStudio = await newStudio.save();
        res.status(200).json(savedStudio);

    }
    catch (err) {
        res.status(500).json(err)
    }
})


// UPDATE
router.put("/:id", async (req, res) => {
    try {
        const updateStudio = await Studio.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).json(updateStudio);
    }
    catch (err) {
        res.status(500).json(err)
    }
})


router.get("/", (req, res) => {
    res.send("This is the studios endpoint.");
});

export default router;