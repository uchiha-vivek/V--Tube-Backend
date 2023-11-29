import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token
    if(!token) return next(createError(401,"You are not authenticated"))  //if token not found

    jwt.verify(token,process.env.JWT, (err,user)=>{
        if(err) return next(createError(403,"Token is not valid.")) // if error is shown
        req.user=user
        next()
    })
}