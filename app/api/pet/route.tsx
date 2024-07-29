import { connecToDB } from "@utils/database";
import Pet from "@models/pet"
export const GET = async  ()=>{
    try {
        await connecToDB();
        const pets = await Pet.find({});
        return new Response(JSON.stringify(pets),{status: 200})     
    } catch (error) {
        return new Response("Failed to fetch pets",{status:500})
    }
}