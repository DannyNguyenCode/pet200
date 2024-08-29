'use client'
import React from 'react'
import { Box,FormControl,Button,Stack,TextField,Typography } from '@mui/material'
const RegisterForm = ({
    errorMessage,
    setErrorMessage,
    email,
    setEmail,
    password,
    setPassword,
    userAlreadyExists,
    setUserAlreadyExists,
    isLoading,
    setIsLoading,
    onSubmit
}:{
    errorMessage:string,
    setErrorMessage:(msg:string)=>void
    email:string,
    setEmail:(email:string)=>void
    password:string,
    setPassword:(password:string)=>void
    userAlreadyExists:boolean,
    setUserAlreadyExists:(userAlreadyExists:boolean)=>void
    isLoading:boolean,
    setIsLoading:(isLoading:boolean)=>void
    onSubmit:(e:any)=>void
}) => {
  return (
    <Box className='content_wrapper' sx={{
        margin:'12rem',
      }} component={'form'} onSubmit={onSubmit}>
        <FormControl sx={{padding:'1rem'}}>
            <Stack spacing={2}>
            <TextField required sx={{ width: '20rem' }} value={email} onChange={(e:any)=>setEmail(e.target.value)} label="Email" variant="outlined" color="info" />
            <TextField required sx={{ width: '20rem' }} value={password} onChange={(e:any)=>setPassword(e.target.value)} label="Password" variant="outlined" color="info"/>
            <Button type='submit' variant="contained">
                  Register
            </Button>
            <Typography color={`${userAlreadyExists?"red":"green"}`}>{errorMessage}</Typography>
            </Stack>
        </FormControl>
  
  </Box>
  )
}

export default RegisterForm