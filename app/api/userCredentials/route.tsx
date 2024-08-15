import { connecToDB } from "@utils/database";
import AccountCredentials from "@models/accountCredentials";


export const GET = async  ()=>{
    try {
        await connecToDB();
        const userCredential = await AccountCredentials.find({});
        return new Response(JSON.stringify(userCredential),{status: 200})     
    } catch (error) {
        return new Response("Failed to fetch all users",{status:500})
    }
}