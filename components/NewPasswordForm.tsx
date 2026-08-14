'use client'
import React,{useEffect} from 'react'
import { newPasswordSchema } from '@utils/newPasswordSchema'
import { Box,Typography,FormControl,Stack,TextField,InputAdornment,IconButton } from '@mui/material'
import Button from '@mui/material/Button'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
const NewPasswordForm = (
  {
    password,
    setPassword,
    confirm,
    setConfirm,
    onSubmit,
    toast,
    ToastContainer,
    isLoading,
    showPassword,
    setShowPassword,
    showConfirm,
    setShowConfirm,
    message
  }
  :
  {
    password:string
    setPassword:(text:string)=>void
    confirm:string
    setConfirm:(text:string)=>void
    onSubmit:any
    toast:(text:string)=>void
    ToastContainer:any
    isLoading:boolean
    showPassword:boolean
    setShowPassword:(show:boolean)=>void
    showConfirm:boolean
    setShowConfirm:(show:boolean)=>void
    message:string
  }
) => {
  useEffect(()=>{
    if(message&&message === 'PC'){
      toast("Passcode entered was correct, Please enter new password")
    }
  },[message, toast])
  const validationResult = newPasswordSchema.safeParse({passwordz:password,confirmz:confirm})
  const validationIssue =
    password || confirm
      ? validationResult.success
        ? undefined
        : validationResult.error.errors[0]
      : undefined
  const isPassValid = validationIssue?.path[0] !== "passwordz"
  const isConfirmValid = validationIssue?.path[0] !== "confirmz"
  const validationError = validationIssue?.message ?? ""
  return (
    <Box className='content_wrapper' sx={{
      margin:'12rem',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'

    }} component={'form'} onSubmit={onSubmit}>
    
        <FormControl sx={{padding:'1rem'}}>
            <Stack spacing={4}>
              <Typography style={{marginBottom: '32px'}} variant="h4">New Password</Typography>

            </Stack>
           
            <Stack spacing={2}>
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
                <Button
                  size="medium"
                  type='submit'
                  loading={isLoading}
                  variant="contained"
                  >
                  Update Password
                </Button>
            
              </Stack>
            {ToastContainer}
            </Stack>
        </FormControl>
        
      

</Box>
  )
}

export default NewPasswordForm
