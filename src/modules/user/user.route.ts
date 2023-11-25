import express from "express";
import { addProductToOrder, createUser, deleteSingleUser, getAllOrders, getAllUsers, getSingleUser, updateSingleUser } from "./user.controller";

const router = express.Router();
router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get("/users/:userId", getSingleUser);
router.get("/users/:userId/orders", getAllOrders);
router.get("/users/:userId/orders", getAllOrders);
router.put("/users/:userId", updateSingleUser);
router.put("/users/:userId/orders", addProductToOrder);
router.delete("/users/:userId", deleteSingleUser);



export const userRoutes = router;