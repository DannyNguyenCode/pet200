import React from 'react'
import { Box, FormControl,Typography,Stack,TextField,Divider} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
const ForgotPasswordForm = (
  {
    onSubmit,
    toastContainer,
    isLoading,
    email,
    setEmail
  }
  :
  {
    onSubmit:any
    toastContainer:any
    isLoading:boolean
    email:string
    setEmail:(email:string)=>void
  }) => {
   
  return (
    <Box className='content_wrapper' sx={{
      margin:'12rem',
    }} component={'form'} onSubmit={onSubmit}>
      
      <FormControl sx={{padding:'1rem'}}>
          <Stack spacing={4}>
            <Typography variant="h4">Forgot Password</Typography>
            <Divider/>
          </Stack>
   
          <Stack spacing={2}>
        
          <TextField required sx={{ width: '20rem' }} value={email} onChange={(e:any)=>setEmail(e.target.value)} label="Email" variant="outlined" color="info" />

          <LoadingButton
            size="medium"
            type='submit'
            loading={isLoading}
            variant="contained"
          >
            Next

          </LoadingButton>
          {toastContainer}
          </Stack>
      </FormControl>

</Box>
  )
}

export default ForgotPasswordForm