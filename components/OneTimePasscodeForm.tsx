'use client'
import React from 'react'
import { Box,FormControl,Stack,Divider,Typography } from '@mui/material'
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import VerificationInput from "react-verification-input";
const OneTimePasscodeForm = (
  {
    toastContainer,
    onSubmit,
    isLoading,
    passcode,
    setPasscode
  }
  :
  {
    toastContainer:any
    onSubmit:any
    isLoading:boolean
    passcode:string
    setPasscode:(passcode:string)=>void
  }) => {
    const router = useRouter();
  return (
    <Box className='content_wrapper' sx={{
      margin:'12rem',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }} component={'form'} onSubmit={onSubmit}>
      
      <FormControl sx={{padding:'1rem'}}>
          <Stack spacing={4}>
            <Typography variant="h4">Passcode</Typography>
            <Divider/>
          </Stack>
   
          <Stack spacing={2}>
        
          <VerificationInput autoFocus length={6} placeholder="_" validChars='0-9' inputProps={{ inputMode: "numeric" }} value={passcode} onChange={(e)=>{setPasscode(e)}}/>
          <Stack spacing={2} direction={'row'}>
          <Button
            size="medium"
            type='submit'
            loading={isLoading}
            variant="contained"
          >
            Submit

          </Button>
          <Button
            size="medium"
            type='button'
            loading={isLoading}
            variant="contained"
            color='error'
            onClick={()=>router.push(`/forgotpassword`)}
          >
            Resend

          </Button>

          </Stack>

          {toastContainer}
          </Stack>
      </FormControl>

</Box>
  )
}

export default OneTimePasscodeForm