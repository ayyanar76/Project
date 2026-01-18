import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './config/Database.js';

dotenv.config()

const port = process.env.PORT || 3001;
connectDB()

 
app.listen(port,()=>{
    console.log(`server is Running on http://localhost:${port}`);
    
}) 