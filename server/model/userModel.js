import mongoose from "mongoose"

export const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
         unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart"
    },
    role:{
        type:String,
        default:"User"
    }
},{
    timestamps:true
})

const User = mongoose.model("User",UserSchema)

export default User;