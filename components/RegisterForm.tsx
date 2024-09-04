'use client'
import React, { useEffect, useState } from 'react'
import { Box,FormControl,Button,Stack,TextField, Divider,InputAdornment } from '@mui/material'
import { Typography,Link } from '@mui/material'
import { registerPasswordSchema } from '@utils/registerPasswordSchema';
import { LoadingButton } from '@mui/lab';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {IconButton} from '@mui/material';
const RegisterForm = ({
    email,
    setEmail,
    password,
    setPassword,
    confirm,
    setConfirm,
    onSubmit,
    ToastContainer,
    isLoading,
    showPassword,
    setShowPassword,
    showConfirm,
    setShowConfirm
    
}:{
    email:string,
    setEmail:(email:string)=>void
    password:string,
    setPassword:(password:string)=>void
    confirm:string
    setConfirm:(confirm:string)=>void
    onSubmit:(e:any)=>void
    ToastContainer:any
    toast:(message:string)=>void
    isLoading:boolean
    showPassword:boolean
    setShowPassword:(showPass:boolean)=>void
    showConfirm:boolean
    setShowConfirm:(showConfirm:boolean)=>void
}) => {

  const [isPassValid,setIsPassValid]=useState(true);
  const [validationError,setValidationError]=useState('')
  const [isConfirmValid,setIsConfirmValid]=useState(true);
  
  useEffect(()=>{
    validatePassword()
  },[password,confirm])

  const validatePassword = async()=>{
    try{
      let result = await registerPasswordSchema.safeParseAsync({passwordz:password,confirmz:confirm})
      if(!result.success){
        if(result.error.errors[0].path[0] === "passwordz"){
          setIsPassValid(false)    
        }else{
          setIsPassValid(true)
        }

        if(result.error.errors[0].path[0] === "confirmz"){
          setIsConfirmValid(false)
        }else{
          setIsConfirmValid(true)
        }

        setValidationError(result.error.errors[0].message)
      }else{
        setValidationError("")
      }
    }catch(err){
      console.log(err)
    }

  }
 
 
  return (
    <Box className='content_wrapper' sx={{
        margin:'12rem',
      }} component={'form'} onSubmit={onSubmit}>
      
          <FormControl sx={{padding:'1rem'}}>
              <Stack spacing={4}>
                <Typography style={{marginBottom: '32px'}} variant="h4">Registration</Typography>

              </Stack>
             
              <Stack spacing={2}>

              <TextField required sx={{ width: '20rem' }} value={email} onChange={(e:any)=>setEmail(e.target.value)} label="Email" variant="outlined" color="info" />
              <Stack spacing={1} direction={'row'} >
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
                {!isPassValid&&password?<Typography color={'red'} alignSelf={'center'}>{validationError}</Typography>:<></>}
              </Stack>
              <Stack spacing={1}direction={'row'}>
                <TextField 
                  required 
                  sx={{ width: '20rem' }} 
                  value={confirm} 
                  type={showConfirm?'text':'password'}
                  onChange={(e:any)=>{
                    setConfirm(e.target.value)
               
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {showConfirm?<IconButton onClick={()=>setShowConfirm(false)}><VisibilityIcon/></IconButton>:<IconButton onClick={()=>setShowConfirm(true)}><VisibilityOffIcon/></IconButton>}
                      </InputAdornment>
                    ),
                  }}
                  label="Confirm Password" 
                  variant="outlined" 
                  color="info"/>
                {!isConfirmValid&&confirm?<Typography color={'red'} alignSelf={'center'}>{validationError}</Typography>:<></>}
                </Stack>
                <Stack spacing={2} direction={'row'}>
                  <LoadingButton
                    size="medium"
                    type='submit'
                    loading={isLoading}
                    variant="contained"
                    >
                    Submit
                  </LoadingButton>
              
                </Stack>
              <Typography>Already registered? <Link href={'/login'}>Login Here</Link></Typography>
              {ToastContainer}
              </Stack>
          </FormControl>
          
        
  
  </Box>
  )
}

export default RegisterForm