import express from "express";
import Studio from "../models/Studio.js";
import { createError } from "../utils/error.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { createStudio, deleteStudio, getAllStudios, getStudio, updateStudio } from "../controllers/studio.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createStudio);

// UPDATE
router.put("/:id", verifyAdmin, updateStudio);

// DELETE
router.delete("/:id", verifyAdmin, deleteStudio);

// GET
router.get("/:id", getStudio);

// GET ALL
router.get("/", getAllStudios);

export default router;