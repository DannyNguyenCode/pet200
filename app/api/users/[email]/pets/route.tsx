// fetch all pets of user by id
import { connecToDB } from "@utils/database";
import Pet from "@models/pet";

export const GET= async (req:any,{params}:any)=>{

    try {
        await connecToDB();
        const pets = await Pet.find({owner: params.email})
        return new Response(JSON.stringify(pets), {status:200})
    } catch (error) {
        return new Response("Failed to fetch owner's pets", {status:500})
    }

}