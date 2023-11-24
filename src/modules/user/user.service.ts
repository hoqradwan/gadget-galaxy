import { TUser } from "./user.interface";
import { User } from "./user.model";

export const createUserService = async (userData: TUser) => {
    const user = new User(userData);
    const result = user.save();
    return result;
}

export const findSingleUserService = async (userId: number) => {
    const result = await User.find({ userId })
    return result;
}