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
        const updateStudio = await Studio.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updateStudio);
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Studio.findByIdAndDelete(req.params.id);
        res.status(200).json("Studio has been deleted.");
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// GET
router.get("/:id", async (req, res) => {
    try {
        const studio = await Studio.findById(req.params.id);
        res.status(200).json(studio);
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// GET ALL
router.get("/", async (req, res) => {
    try {
        const studios = await Studio.find();
        res.status(200).json(studios);
    }
    catch (err) {
        res.status(500).json(err)
    }
})


router.get("/", (req, res) => {
    res.send("This is the studios endpoint.");
});

export default router;