import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";

const router = express.Router();

// CREATE
router.post("/", createUser);

// UPDATE
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

// GET
router.get("/:id", getUser);

// GET ALL
router.get("/", getAllUsers);

export default router;