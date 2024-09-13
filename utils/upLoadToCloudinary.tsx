import {cloudinary} from '@cloudinary.config.js'
import { NextRequest } from 'next/server'

export const upLoadToCloudinary = async(
    fileUri:string,fileName:string
)=>{
    try{
        let result = await cloudinary.uploader.upload(
            fileUri,{
                invalidate:true,
                resource_type:'auto',
                filename_override:fileName,
                folder:'pet-images',
                use_filename:true
            }
        )
        if(result){
            return result
        }
    }catch(err){
        return new Response("Failed to upload image to cloudinary", {status:500})
    }

}