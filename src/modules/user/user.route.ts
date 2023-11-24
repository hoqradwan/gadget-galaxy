import express from "express";
import { userControllers } from "./user.controller";

const router = express.Router();
router.post("/users", userControllers.createUserController);


export const userRoutes = router;