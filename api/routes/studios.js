import express from "express";
import { createStudio, deleteStudio, getAllStudios, getStudio, updateStudio } from "../controllers/studio.js";
import Studio from "../models/Studio.js";
import { createError } from "../utils/error.js";

const router = express.Router();

// CREATE
router.post("/", createStudio);

// UPDATE
router.put("/:id", updateStudio);

// DELETE
router.delete("/:id", deleteStudio);

// GET
router.get("/:id", getStudio);

// GET ALL
router.get("/", getAllStudios);

export default router;