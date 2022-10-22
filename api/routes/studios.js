import express from "express";

const router = express.Router();

// Create
router.post("/", (req, res) => {

})


router.get("/", (req, res) => {
    res.send("This is the studios endpoint.");
});

export default router;