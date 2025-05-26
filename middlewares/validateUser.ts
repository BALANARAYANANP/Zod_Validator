import {Request , Response, NextFunction} from 'express'
import { userSchema } from '../schemas/userSchema'

export const ValidateUser = (req:Request, res:Response, next :NextFunction) =>{

    const result = userSchema.safeParse(req.body)

    if(!result.success){
        res.status(400).json({
            message: "Validation Failed",
            error : result.error.errors
        })
    }

    req.body = result.data
    next();
}
