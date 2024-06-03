import express from "express";
import path from "path"
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(path.join(__dirname,"..","public"))


const app = express();
app.set("viewEngine", "ejs");
app.use(express.static(path.join(__dirname,"..", "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// router info 

import { router } from "./routes/form.route.js";

app.use("/user",router)
app.use(router)



export default app