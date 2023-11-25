import { Model } from "mongoose";

export type TOrder = {
    productName: string;
    price: number;
    quantity: number;
}
export type TFullName = {
    firstName: string;
    lastName: string;
}
export type TAddress = {
    street: string;
    city: string;
    country: string;
}
export type TUser = {
    userId: number;
    username: string;
    password: string;
    fullName: TFullName,
    age: number;
    email: string;
    hobbies: string[];
    address: TAddress,
    orders?: TOrder[];
    isActive: boolean;
}
export interface UserModel extends Model<TUser> {
    // eslint-disable-next-line no-unused-vars
    isUserExists(userId: number): Promise<TUser | null>
}
