import { connecToDB } from "@utils/database";
import OneTimePasscode from "@models/oneTimePasscode";
import * as OneTimePasscodeInterface from "@interfaces/oneTimePasscode";
import { NextRequest } from "next/server";

export const GET = async(req:NextRequest)=>{
    try {
        await connecToDB();
        const passcode = await OneTimePasscode.find({user: req.nextUrl.searchParams.get("user")});
        return new Response(JSON.stringify(passcode),{status: 200})     
    } catch (error) {
        return new Response("Failed to fetch passcode from email provided",{status:500})
    }
}

export const POST = async(req:any)=>{
    const passcode:OneTimePasscodeInterface.oneTimePasscode = await req.json();

    try {
        await connecToDB();
        const newPasscode:any = new OneTimePasscode({
            passcode: passcode.passcode,
            issueDate: passcode.issueDate,
            expiryDate:passcode.expiryDate,
            user:passcode.user,
        });
        await newPasscode.save();
        return new Response("Successfully created new passcode",{status:201});
    } catch (error) {
        return new Response("Failed to create new passcode",{status:500})
    }
}

export const DELETE = async(req:NextRequest)=>{
    try{
        await connecToDB();
        await OneTimePasscode.deleteMany({user: req.nextUrl.searchParams.get("user")})
        return new Response("Successfully deleted passcode",{status: 200}) 
    }catch(err){
        return new Response("Failed to delete passcode from email provided",{status:500})
    }
}