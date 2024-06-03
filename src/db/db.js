import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
console.log(DB_NAME)


const DbConnect = async ()=>{
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(connectionInstance.connection.host)

    } catch (error) {
        console.log("Error connecting to Mongo",error)
    }
}

export {DbConnect}