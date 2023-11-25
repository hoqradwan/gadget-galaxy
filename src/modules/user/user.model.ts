import { Schema, model } from "mongoose";
import { TUser, TFullName, TAddress, TOrder, UserModel, UserMethods } from "./user.interface";
const FullNameSchema = new Schema<TFullName>({
    firstName: {
        type: String,
        required: [true, "first name is required"],
        trim: true,
        maxlength: 20
    },
    lastName: {
        type: String,
        required: [true, "last name is required"],
        trim: true,
        maxlength: 20
    }
})
const addressSchema = new Schema<TAddress>({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})
const OrderSchema = new Schema<TOrder>({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})
const UserSchema = new Schema<TUser, UserModel, UserMethods>({
    userId: {
        type: Number,
        required: [true, 'User id is required'],
        unique: true
    },
    username: {
        type: String,
        required: [true, "username is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required"],
        maxlength: [20, "password cannot be more than 20 characters"]

    },
    fullName: {
        type: FullNameSchema,
        required: [true, "Full name is required"]
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    hobbies: {
        type: [String],
    },
    address: { type: addressSchema, required: true },
    orders: { type: [OrderSchema] },
    isActive: {
        type: Boolean,
        default: true
    }
})

UserSchema.statics.isUserExists = async function (userId: number) {
    const existingUser = await User.findOne({ userId })
    return existingUser;
}
export const User = model<TUser, UserModel>("User", UserSchema);