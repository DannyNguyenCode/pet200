import { connecToDB } from "@utils/database";
import AccountCredentials from "@models/accountCredentials"

export const GET = async  (req:any,{params}:any)=>{
    console.log("check3")
    try {
        await connecToDB();
        const userCredential = await AccountCredentials.findOne({email:params.email});
        return new Response(JSON.stringify(userCredential),{status: 200})     
    } catch (error) {
        return new Response("User email does not exist!",{status:500})
    }
}