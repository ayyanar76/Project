import User from "../model/userModel.js";
import jwt from "jsonwebtoken";
import AppError from "../middleware/Handleerror.js";
import dotenv from 'dotenv'
dotenv.config({})

export const protect = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return next(new AppError(401,"Not authorized, token missing"));
    }
   
    const decoded = jwt.verify(token, process.env.JWT_KEY);
  
    const user = await User.findById(decoded.id);
    if (!user) {
      return next(new AppError(401,"User no longer exists"));
    }

    req.user = user; // attach user
    next();
  } catch (error) {
    return next(new AppError(401,error.message));
  }
};