import { connecToDB } from "@utils/database";
import OneTimePasscode from "@models/oneTimePasscode";
import * as OneTimePasscodeInterface from "@interfaces/oneTimePasscode";
import { NextRequest } from "next/server";
//1 Enter email -> click send email
//2 application calls GET to find any passcodes
//3 if passcode exists, call DELETE
//4 else call POST
//5 redirect user to /passcode
//6 user enters passcode and clicks submit
//7 call GET and validate conditions
//8 if success redirect to /newpassword
//9 else if conditions are wrong, offer/display resend email
        // user clicks resend email -> redirect back to /forgotpassword
        // restart process 1
//10 user enters newpassword and confirm password
//11 validate passwords
//12 call user POST to update information
//13 redirect user to login with /login/message

export const GET = async(req:NextRequest)=>{
    try {
        await connecToDB();
        console.log("check2====================")
        console.log("req",req)
        const passcode = await OneTimePasscode.find({user: req.nextUrl.searchParams.get("user")});
        console.log("passcode",passcode)
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
        await OneTimePasscode.deleteOne({user: req.nextUrl.searchParams.get("user")})
        return new Response("Successfully deleted passcode",{status: 200}) 
    }catch(err){
        return new Response("Failed to delete passcode from email provided",{status:500})
    }
}