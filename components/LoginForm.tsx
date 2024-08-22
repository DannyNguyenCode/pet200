'use client'
import React, { useEffect, useState } from 'react'
import { FormControl, TextField,Button, Box} from '@mui/material'
import { auth } from "../auth"
import {signIn} from 'next-auth/react';
import { useRouter } from 'next/navigation';
const LoginForm = ({

  email,
  setEmail,
  password,
  setPassword,

}:{
  email:string,
  setEmail:(email:string)=>void,
  password:string,
  setPassword:(password:string)=>void

}) => {
  const router = useRouter();
  const [loginErrorMessage,setLoginErrorMessage]=useState('')
  return (
    <Box className='w-full flex-center content_wrapper' component={'form'}>
        <FormControl>
          <TextField value={email} onChange={(e:any)=>setEmail(e.target.value)} label="Email" variant="filled" color="success" />
          <TextField value={password} onChange={(e:any)=>setPassword(e.target.value)} label="Password" variant="filled" color="success" />
          <Button onClick={()=>{
              signIn("credentials",{redirect:false, email:email,password:password}).then((res:any)=>{
                console.log("res",res)
                if(res?.status === 200){
                  router.push("/profile")
                }else{
                  setLoginErrorMessage(res?.error);
                  console.log("res.error",res.error)
                }
              })

             
            }} variant="contained">
                Login
          </Button>
          OR
          <Button variant="contained" onClick={()=>signIn("google",{callbackUrl:'/',redirect:true})}>
            Sign in with Google
          </Button>
          <Button variant="contained" onClick={()=>signIn("github",{callbackUrl:'/',redirect:true})}>
            Sign in with GitHub
          </Button>
        </FormControl>
    </Box>
  )
}

export default LoginForm