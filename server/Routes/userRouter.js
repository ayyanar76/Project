import express from "express";
import { addToCart, createUser, getUserdetails, login, removeFromCart } from "../controller/Usercontroller.js";
import { protect } from "../middleware/tokendecoder.js";

const userRouter = express.Router()
userRouter.route('/users/register').post(createUser)
userRouter.route('/user/login').post(login)
userRouter.route('/user').get(protect,getUserdetails)
userRouter.route('/addcart/:productId').post(protect,addToCart)
userRouter.route('/remove/:productId').delete(protect,removeFromCart)



export default userRouter;         