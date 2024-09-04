//fetch single user by id

import { connecToDB } from "@utils/database";
import User from "@models/user";
import * as UserInterface from "@interfaces/user"
export const GET = async (req:any,{params}:any)=>{
    try{
        await connecToDB();
        const user = await User.find({email: params.email});
        return new Response(JSON.stringify(user), {status:200})
    }catch(err){
        return new Response("Failed to fetch user", {status:500})
    }
}
export const PUT=async(req:any,{params}:any)=>{
    try{
        await connecToDB();
        const user:UserInterface.User = await req.json();
        const updatedUser = await User.findOneAndUpdate({email:user.email,loginType:user.loginType},{password:user.password},{
            new:true
        })
        return new Response(JSON.stringify(updatedUser), {status:200})

    }catch(err){
        return new Response("Failed to update user", {status:500})
    }
}