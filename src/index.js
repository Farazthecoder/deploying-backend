import dotenv from "dotenv"
import app from './app.js'
import { DbConnect } from "./db/db.js"


dotenv.config ={
    path:"./.env"
}



DbConnect().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log("mongodb connection has  been failed: " + err)
})