import {z} from 'zod';


export const userSchema = z.object({

    name: z.string().min(4),
    age: z.number().int().positive(),
    email:z.string().email()


})

export type UserType = z.infer<typeof userSchema>;
