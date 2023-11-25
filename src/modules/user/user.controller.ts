import { addProductToOrderService, createUserService, deleteSingleUserService, getAllOrdersService, getAllUsersService, getSingleUserService, totalPriceOfOrdersService, updateSingleUserService } from "./user.service";
import { Request, Response } from "express";
import { UserValidationSchema } from "./user.validation";
export const createUser = async (req: Request, res: Response) => {
    try {
        const { user: userData } = req.body;
        const zodParsedData = UserValidationSchema.parse(userData)
        const result = await createUserService(zodParsedData);
        res.status(200).json({
            success: true,
            message: "User created successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
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
        await deleteSingleUserService(Number(userId));
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
export const addProductToOrder = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const updatedUserOrder = req.body;
        await addProductToOrderService(userId, updatedUserOrder);
        res.status(200).json({
            success: true,
            message: "Order created successfully",
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
export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const result = await getAllOrdersService(userId);
        res.status(200).json({
            success: true,
            message: "Order fetched successfully",
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
export const totalPriceOfOrders = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const result = await totalPriceOfOrdersService(Number(userId));
        res.status(200).json({
            success: true,
            message: "Total price calculated successfully!",
            data: {
                totalPrice: result
            }
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
