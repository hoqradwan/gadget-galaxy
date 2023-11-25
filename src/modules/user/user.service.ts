import { TUser } from "./user.interface";
import { User } from "./user.model";

export const createUserService = async (userData: TUser) => {
    if (await User.isUserExists(userData.userId)) {
        throw new Error("User already exists")
    }
    const result = await User.create(userData);
    // const user = new User(userData);
    // if (await user(userData.userId)) {
    //     throw new Error("User already exists");
    // }
    // const user = new User(userData);
    // const result = await user.save();
    return result;
}

export const getAllUsersService = async () => {
    const result = await User.find();
    return result;
}
export const getSingleUserService = async (userId: number) => {
    if (!(await User.isUserExists(userId))) {
        throw new Error("User does not exsist")
    }
    const result = await User.find({ userId })
    return result;
}
export const updateSingleUserService = async (userId: number, updatedUser: TUser) => {
    if (!(await User.isUserExists(userId))) {
        throw new Error("User does not exsist")
    }
    const result = await User.updateOne({ userId: userId }, { $set: updatedUser })
    return result;
}
export const deleteSingleUserService = async (userId: number) => {
    if (await User.isUserExists(userId) === null) {
        throw new Error("User does not exist")
    }
    const result = await User.deleteOne({ userId: userId })
    return result;
}
export const addProductToOrderService = async (userId: string, updatedUserOrder: TUser) => {
    const result = await User.updateOne({ userId: userId }, { $set: updatedUserOrder })
    return result;
}
export const getAllOrdersService = async (userId: string) => {
    const result = await User.find({ userId }).select({ orders: 1, _id: 0 });
    return result;
}
export const totalPriceOfOrdersService = async (userId: number) => {
    if (!(await User.isUserExists(userId))) {
        throw new Error("User does not exsist")
    }
    const user = await User.findOne({ userId });
    const totalPrice = user?.orders?.reduce((total, order) => {
        const orderTotal = order.price * order.quantity;
        return total + orderTotal;
    }, 0);
    return totalPrice;
}