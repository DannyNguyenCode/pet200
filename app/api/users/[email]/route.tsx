//fetch single user by id

import { connecToDB } from "@utils/database";
import User from "@models/user";

export const GET = async (req:any,{params}:any)=>{
    try{
        await connecToDB();
        const user = await User.find({email: params.email});
        return new Response(JSON.stringify(user), {status:200})
    }catch(err){
        return new Response("Failed to fetch user", {status:500})
    }
}