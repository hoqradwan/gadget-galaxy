import { TUser } from "./user.interface";
import { User } from "./user.model";

export const createUserService = async (userData: TUser) => {
    const user = new User(userData);
    const result = user.save();
    return result;
}

export const getAllUsersService = async () => {
    const result = await User.find();
    return result;
}
export const getSingleUserService = async (userId: string) => {
    const result = await User.find({ userId })
    return result;
}
export const updateSingleUserService = async (userId: string, updatedUser: TUser) => {
    const result = await User.updateOne({ userId: userId }, { $set: updatedUser })
    return result;
}
export const deleteSingleUserService = async (userId: string) => {
    const result = await User.deleteOne({ userId: userId })
    return result;
}