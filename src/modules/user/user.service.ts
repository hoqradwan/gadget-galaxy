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
export const addProductToOrderService = async (userId: string, updatedUserOrder: TUser) => {
    const result = await User.updateOne({ userId: userId }, { $set: updatedUserOrder })
    return result;
}
export const getAllOrdersService = async (userId: string) => {
    const result = await User.find({ userId }).select({ orders: 1, _id: 0 });
    return result;
}
export const totalPriceOfOrdersService = async (userId: string, user: TUser) => {
    const { user: userData } = await User.find({ userId });
    const totalPrice = userData.orders.map((order: object) => {
        let totalcost = 0
        const total = order.price * order.quantity;
        totalcost += total
        return totalcost;
    })
    console.log(totalPrice)
}