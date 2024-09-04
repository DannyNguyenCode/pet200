import { object, string } from "zod"

export const newPasswordSchema = object({  
    passwordz: string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    confirmz: string()
  }).superRefine((data,ctx)=>{
    if(data.passwordz !== data.confirmz){
      ctx.addIssue({
        code:'custom',
        message:"Passwords do not match",
        path:['confirmz']
      })
    }

 
  })