'use client'
import React from 'react'
import { Box,FormControl,Button,Stack,TextField, Divider } from '@mui/material'
import { Typography,Link } from '@mui/material'
const RegisterForm = ({
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
    ToastContainer,
}:{
    email:string,
    setEmail:(email:string)=>void
    password:string,
    setPassword:(password:string)=>void
    onSubmit:(e:any)=>void
    ToastContainer:any
}) => {
  return (
    <Box className='content_wrapper' sx={{
        margin:'12rem',
      }} component={'form'} onSubmit={onSubmit}>
        
        <FormControl sx={{padding:'1rem'}}>
            <Stack spacing={4}>
              <Typography variant="h4">Registration</Typography>
              <Divider/>
            </Stack>
     
            <Stack spacing={2}>
          
            <TextField required sx={{ width: '20rem' }} value={email} onChange={(e:any)=>setEmail(e.target.value)} label="Email" variant="outlined" color="info" />
            <TextField required sx={{ width: '20rem' }} value={password} onChange={(e:any)=>setPassword(e.target.value)} label="Password" variant="outlined" color="info"/>
            <Button type='submit' variant="contained">
                  Register
            </Button>
            <Typography>Already registered? <Link href={'/login'}>Login Here</Link></Typography>
            {ToastContainer}
            </Stack>
        </FormControl>
  
  </Box>
  )
}

export default RegisterForm