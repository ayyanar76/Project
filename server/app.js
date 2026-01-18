import express from 'express'
import productrouter from './Routes/productRoute.js'
import cors from 'cors'
import globalErrorHandler from './middleware/error.js'
import cookieParser from 'cookie-parser'
import userRouter from './Routes/userRouter.js'


const app = express()
app.use(express.json())
app.use(cors({
    origin:["https://project-1-6bc5.onrender.com","https://admin-wbzi.onrender.com"],
    credentials:true
}))
app.use(cookieParser())
app.use('/api/v1',productrouter) 
app.use('/api/v1',userRouter)
app.get('/',(req,res)=>{
    res.json({
        msg:"Api is Running "
    })
})

app.use(globalErrorHandler)
export default app;
