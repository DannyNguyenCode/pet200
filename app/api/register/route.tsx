import { connecToDB } from "@utils/database";
import User from "@models/user";
import * as UserInterface from "@interfaces/user";


export const POST = async(req:any)=>{
    const user:UserInterface.User = await req.json();
    try {
        await connecToDB();

        let userExists = null


        userExists = await User.findOne({
                $and: [
                    {email:user.email},
                    {loginType: user.loginType}
                  ]
                   
        })
        if(userExists){
            return new Response("User already Exists in database",{status:409});
        }
   
        const newUser = new User({
            email:user.email,
            username:user.username,
            image:user.image,
            loginType:user.loginType,
            password:user.password,
        });
        await newUser.save();
        return new Response("Successfully registered new user",{status:201});
    } catch (error) {
        return new Response("Failed to register new user",{status:500})
    }
}