import { createUserService, deleteSingleUserService, getAllUsersService, getSingleUserService, updateSingleUserService } from "./user.service";
import { Request, Response } from "express";
export const createUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const result = await createUserService(user);
        res.status(200).json({
            success: true,
            message: "User created successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: {
                code: 400,
                descrtiption: error.message
            }
        })
    }
}
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await getAllUsersService();
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: result
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            error: {
                code: 404,
                descrtiption: "User not found!"
            }
        })
    }
}
export const getSingleUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const result = await getSingleUserService(userId);
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: result
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "User not found",
            error: {
                code: 404,
                description: "User not found!"
            }
        })
    }
}
export const updateSingleUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const updateAeUser = req.body;
        const result = await updateSingleUserService(userId, updateAeUser);
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: result
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "User not found",
            error: error
        })
    }
}
export const deleteSingleUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const result = await deleteSingleUserService(userId);
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: null
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "User not found",
            error: error
        })
    }
}
