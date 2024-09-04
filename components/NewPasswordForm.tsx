'use client'
import React,{useState,useEffect} from 'react'
import { newPasswordSchema } from '@utils/newPasswordSchema'
import { Box,Typography,FormControl,Stack,TextField,InputAdornment,Link,IconButton } from '@mui/material'
import { LoadingButton } from '@mui/lab'
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
  const [isPassValid,setIsPassValid]=useState(true);
  const [validationError,setValidationError]=useState('')
  const [isConfirmValid,setIsConfirmValid]=useState(true);
  useEffect(()=>{
    if(message&&message === 'PC'){
      toast("Passcode entered was correct, Please enter new password")
    }
  },[])
  useEffect(()=>{

    validatePassword()

  },[password,confirm])
  const validatePassword = async()=>{
    try{
      let result = await newPasswordSchema.safeParseAsync({passwordz:password,confirmz:confirm})
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
                <LoadingButton
                  size="medium"
                  type='submit'
                  loading={isLoading}
                  variant="contained"
                  >
                  Update Password
                </LoadingButton>
            
              </Stack>
            {ToastContainer}
            </Stack>
        </FormControl>
        
      

</Box>
  )
}

export default NewPasswordForm