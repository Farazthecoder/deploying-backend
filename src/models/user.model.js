import { Schema } from "mongoose";
import mongoose from "mongoose";


const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    fullName:{
      type:String,
      required:true,
      trim:true,
      lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true, "password is required"]
    }
},{timestamps:true})

const User = mongoose.model("User",userSchema)

export {User}