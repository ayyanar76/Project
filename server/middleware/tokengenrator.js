import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import AppError from './Handleerror.js'
dotenv.config({})


 const genrateToken = (id)=>{
     try {
        if(!id){
            next(new AppError(400,"token Can't genrate bcoz doesn;t foound User Id")) 
        }
        const token = jwt.sign({id},process.env.JWT_KEY,{expiresIn:"7d"})
       return token
    } catch (error) {
        next(new AppError(501,error.message))
    }
}
export default genrateToken