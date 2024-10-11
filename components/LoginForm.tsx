'use client'
import React, { useEffect, useState } from 'react'
import { FormControl, TextField,Button, Box, Stack, Typography, Divider,InputAdornment} from '@mui/material'
import {signIn} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {IconButton} from '@mui/material';
const LoginForm = ({
  message,
  email,
  setEmail,
  password,
  setPassword,

}:{
  message?:string,
  email:string,
  setEmail:(email:string)=>void,
  password:string,
  setPassword:(password:string)=>void

}) => {
  const router = useRouter();
  const [loginErrorMessage,setLoginErrorMessage]=useState('')
  const [showPassword,setShowPassword]=useState(false)
  useEffect(()=>{

    if(message && message[0] === "SR"){
      toast("Successfully Registered")
    }else if(message && message[0] === "SUP"){
      toast("Successfully Updated Password")
    }
    else{
      console.log("")
    }
   

  },[])
  return (
    <Box className='content_wrapper loginform' sx={{
      margin:'12rem',
    }} component={'form'}>
        <FormControl sx={{padding:'1rem'}} className='loginFormControl'>
          <Stack spacing={4}>
            <Typography variant="h4">Login</Typography>
            <Divider/>
          </Stack>
          <Stack spacing={2}>
            <TextField sx={{ width: '20rem' }} value={email} onChange={(e:any)=>setEmail(e.target.value)} label="Email" variant="outlined" color="info" />
            <TextField 
                  required 
                  sx={{ width: '20rem' }} 
                  value={password} 
                  type={showPassword?'text':'password'}
                  onChange={(e:any)=>{
                    setPassword(e.target.value)
             
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {showPassword?<IconButton onClick={()=>setShowPassword(false)}><VisibilityIcon/></IconButton>:<IconButton onClick={()=>setShowPassword(true)}><VisibilityOffIcon/></IconButton>}
                        </InputAdornment>
                      ),
                    }} 
                  label="Password"
                  variant="outlined"
                  color="info"/>
            <Button onClick={()=>{
                signIn("credentials",{redirect:false, email:email,password:password}).then((res:any)=>{
                  if(res.error === "CredentialsSignin"){
                    toast("Invalid Credentials")
                  }
                  if(res?.status === 200 && res.error === null){
                    router.push("/profile/SLI")
                  }else{
                    setLoginErrorMessage("Invalid Credentials");
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
        <ToastContainer theme="dark"/>
    </Box>
  )
}

export default LoginForm