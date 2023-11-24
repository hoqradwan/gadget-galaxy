import { createUserService } from "./user.service";
import { Request, Response } from "express";
const createUserController = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const result = await createUserService(user);
        res.status(200).json({
            success: true,
            message: "User created successfully",
            data: result
        })

    } catch (error: unknown) {
        res.status(400).json({
            success: false,
            error: {
                code: 400,
                descrtiption: error.message
            }
        })
    }
}

export const userControllers = {
    createUserController
}