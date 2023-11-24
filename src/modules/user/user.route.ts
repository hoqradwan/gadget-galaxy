import express from "express";
import { createUser, getAllUsers, getSingleUser, updateSingleUser } from "./user.controller";

const router = express.Router();
router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get("/users/:userId", getSingleUser);
router.put("/users/:userId", updateSingleUser);



export const userRoutes = router;