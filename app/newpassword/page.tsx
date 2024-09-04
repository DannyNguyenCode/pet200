'use client'
import NewPasswordForm from '@components/NewPasswordForm'
import React, { useState } from 'react'
import { newPasswordSchema } from '@utils/newPasswordSchema'

const page = () => {
    // user enters new password
    // user enters confirm password
    // user clicked submit
    // user table updates with new password
    // notify user password has been updated
    // redirect to login route
    const [newPassword,setNewPassword]=useState('')
    const [confirmNewPassword,setConfirmNewPassword]=useState('')
    const onSubmit = async (e:any)=>{
      const{password,confirmPassword} = await newPasswordSchema.parseAsync({newPassword,confirmNewPassword})
    }
  return (
    <NewPasswordForm/>
  )
}

export default page