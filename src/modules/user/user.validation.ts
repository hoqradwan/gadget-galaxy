import { z } from 'zod';

const FullNameSchema = z.object({
    firstName: z.string().min(1).max(20),
    lastName: z.string().min(1).max(20),
});

const AddressSchema = z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
});

const OrderSchema = z.object({
    productName: z.string(),
    price: z.number(),
    quantity: z.number(),
});

export const UserValidationSchema = z.object({
    userId: z.number(),
    username: z.string(),
    password: z.string().max(20),
    fullName: FullNameSchema,
    age: z.number(),
    email: z.string(),
    hobbies: z.array(z.string()),
    address: AddressSchema,
    orders: z.array(OrderSchema).optional(),
    isActive: z.boolean(),
});

