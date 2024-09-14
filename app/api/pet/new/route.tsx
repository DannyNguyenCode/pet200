import { connecToDB } from "@utils/database";
import Pet from "@models/pet";
import * as PetInterface from "@interfaces/pet";


export const POST = async(req:any)=>{
    const pet:PetInterface.Pet = await req.json();
    try {
        await connecToDB();
        const newPet = new Pet({
            category:pet.category,
            name:pet.name,
            gender:pet.gender,
            originalImage:pet.originalImage,
            croppedImage:pet.croppedImage,
            breed:pet.breed,
            age:pet.age,
            primaryColor:pet.primaryColor,
            secondaryColor:pet.secondaryColor,
            desc:pet.desc,
            owner:pet.owner,
        });
        await newPet.save();
        return new Response("Successfully added pet to your profile",{status:201});
    } catch (error) {
        return new Response("Failed to add new pet to database",{status:500})
    }
}