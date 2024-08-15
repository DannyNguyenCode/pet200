'use client'
import React, { useEffect, useState } from 'react'
import { FormControl, TextField,Button, Box} from '@mui/material'
const LoginForm = ({
  authenticateUser,
  email,
  setEmail,
  password,
  setPassword,

}:{
  authenticateUser:(e:any)=>any
  email:string,
  setEmail:(email:string)=>void,
  password:string,
  setPassword:(password:string)=>void

}) => {

  return (
    <Box className='w-full flex-center content_wrapper' component={'form'} onSubmit={authenticateUser}>
        <FormControl>
          <TextField value={email} onChange={(e:any)=>setEmail(e.target.value)} label="Email" variant="filled" color="success" />
          <TextField value={password} onChange={(e:any)=>setPassword(e.target.value)} label="Password" variant="filled" color="success" />
          <Button type='submit' variant="contained">
                Login
          </Button>
        </FormControl>
    </Box>
  )
}

export default LoginForm