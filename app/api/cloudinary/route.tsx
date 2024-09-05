import { upLoadToCloudinary } from "@utils/upLoadToCloudinary";
import { NextRequest } from "next/server";

export const POST = async(req:NextRequest)=>{
    try{
        const formData = await req.formData()
        const file = formData.get("file") as File
        const fileBuffer = await file.arrayBuffer();
        const mimeType= file.type;
        const encoding = "base64"
        const base64Data = Buffer.from(fileBuffer).toString(encoding)
        const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;
        const res = await upLoadToCloudinary(fileUri,file.name);

        if(res){
            return new Response(JSON.stringify(res), {status:200})
        }
    }catch(err){
        console.log("err",err)
        return new Response("Failed to upload image to cloudinary", {status:500})
    }
 
}