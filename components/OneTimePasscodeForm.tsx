'use client'
import React from 'react'
import { Box,FormControl,Stack,Divider,Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
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
    }} component={'form'} onSubmit={onSubmit}>
      
      <FormControl sx={{padding:'1rem'}}>
          <Stack spacing={4}>
            <Typography variant="h4">Passcode</Typography>
            <Divider/>
          </Stack>
   
          <Stack spacing={2}>
        
          <VerificationInput autoFocus length={6} placeholder="_" validChars='0-9' inputProps={{ inputMode: "numeric" }} value={passcode} onChange={(e)=>{setPasscode(e)}}/>
          <Stack spacing={2} direction={'row'}>
          <LoadingButton
            size="medium"
            type='submit'
            loading={isLoading}
            variant="contained"
          >
            Submit

          </LoadingButton>
          <LoadingButton
            size="medium"
            type='button'
            loading={isLoading}
            variant="contained"
            color='error'
            onClick={()=>router.push(`/forgotpassword`)}
          >
            Resend

          </LoadingButton>

          </Stack>

          {toastContainer}
          </Stack>
      </FormControl>

</Box>
  )
}

export default OneTimePasscodeForm