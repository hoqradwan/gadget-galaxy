import { createUserService, findSingleUserService } from "./user.service";
import { Request, Response } from "express";
export const createUserController = async (req: Request, res: Response) => {
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
export const findSingleUserController = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const result = await findSingleUserService(userId);
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
