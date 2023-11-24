import { createUserService } from "./user.service";
import { Request, Response } from "express";
const createUserController = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const result = await createUserService(user);
        res.status(200).json({
            success: true,
            message: "user created successfully",
            data: result
        })

    } catch (err: unknown) {
        res.status(400).json({
            success: false,
            err: err
        })
    }
}

export const userControllers = {
    createUserController
}