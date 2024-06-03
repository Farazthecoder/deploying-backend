import { User } from "../models/user.model.js";

const handleForm = async (req,res) =>{
     res.render("form.ejs");
}

const handleInputs = async (req,res) =>{
     const {username , fullname , email , password} = req.body

     if(!username && !fullname && !email && !password){
         res.status(404).send("please enter all the fields")
     }
       
    const userInfo =  await User.create({
          userName : username,
          fullName : fullname,
          email : email,
          password : password
     })
    
     res.json(userInfo)
     // console.log(userInfo)
     

}

export {handleForm}
export {handleInputs}