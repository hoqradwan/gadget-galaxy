import express from "express";
import { createUserController, findSingleUserController } from "./user.controller";

const router = express.Router();
router.post("/users", createUserController);
router.get("/users/:userId", findSingleUserController);



export const userRoutes = router;