'use client'
import React, { useEffect, useState } from 'react'
import { FormControl, TextField,Button, Box, ThemeProvider, Stack, Typography, Divider} from '@mui/material'
import { auth } from "../auth"
import {signIn} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
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
    <Box className='content_wrapper loginform' sx={{
      margin:'12rem',
    }} component={'form'}>
        <FormControl sx={{padding:'1rem'}} className='loginFormControl'>
          <Stack spacing={2}>
            <TextField sx={{ width: '20rem' }} value={email} onChange={(e:any)=>setEmail(e.target.value)} label="Email" variant="outlined" color="info" />
            <TextField sx={{ width: '20rem' }} value={password} onChange={(e:any)=>setPassword(e.target.value)} label="Password" variant="outlined" color="info"/>
            <Button onClick={()=>{
                signIn("credentials",{redirect:false, email:email,password:password}).then((res:any)=>{
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
            <Typography>Do not have an account? <Link href={'/register'}>Register here</Link></Typography>
            <Typography>Forgot Password? <Link href={'/forgotpassword'}>Reset Password</Link></Typography>
            </Stack>
         
            <Divider>
              <Typography marginBottom={'0.5rem'} marginTop={'0.5rem'} align='center'>
                OR
              </Typography>
            </Divider>
      
              <Stack spacing={1}>
            <Button startIcon variant="contained" onClick={()=>signIn("google",{callbackUrl:'/',redirect:true})}>
            <Stack alignItems="center" direction="row" gap={2}>
              <GoogleIcon/> 
              <Box component="span">Sign in with Google</Box>
            </Stack>
         
            </Button>
            <Button startIcon variant="contained" onClick={()=>signIn("github",{callbackUrl:'/',redirect:true})}>
              <Stack alignItems={'center'} direction={"row"} gap={2}>
                <GitHubIcon/>
                <Box component={'span'}>Sign in with GitHub</Box>
              </Stack>
          
            </Button>
            </Stack>
        </FormControl>
  
    </Box>
  )
}

export default LoginForm