import express from "express";
import { createUser, getAllUsers, getSingleUser } from "./user.controller";

const router = express.Router();
router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get("/users/:userId", getSingleUser);



export const userRoutes = router;