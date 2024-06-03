import { Router } from "express";
import { handleForm , handleInputs } from "../controllers/form.controller.js";



const router = Router();


router.route("/form").get(handleForm)
router.route("/rejistered").post(handleInputs)



export {router}