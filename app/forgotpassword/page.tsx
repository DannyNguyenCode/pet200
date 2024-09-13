'use client'
import { getCurrentDate } from '@utils/date'
import React from 'react'
import { useState } from 'react'
import ForgotPasswordForm from '@components/ForgotPasswordForm'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { randomizer } from '@utils/randomizer'
const forgotPassword = () => {
  const router = useRouter();
  const [isLoading,setIsLoading] = useState(false);
  const [email,setEmail]= useState('');
  const onSubmit =async (e:any)=>{

    e.preventDefault();
    setIsLoading(true);
    try{
      const fetchUser = await fetch(`/api/users/${email}`).then((res)=>{
        return res.json();
      });
      if(fetchUser[0]){

        let issueDate=getCurrentDate()
        let expiryDate=getCurrentDate()
        expiryDate.setMinutes(issueDate.getMinutes() +16)
        let passcode =randomizer().toString()
        const res = await fetch(`/api/passcode?user=${fetchUser[0].email}`).then((res)=>{
          return res.json();
        })
        if(res.length > 0){
          await fetch(`/api/passcode?user=${fetchUser[0].email}`,{method:'DELETE'})
        }
        const createPasscode = await fetch(`/api/passcode`,{
          method:'POST',
          body:JSON.stringify({
            passcode:passcode,
            issueDate:issueDate,
            expiryDate:expiryDate,
            user:fetchUser[0].email
          })
        })


        if(createPasscode.ok){
          const sendEmail = await fetch(`/api/send`,{
            method:'POST',
            body:JSON.stringify({
              email:fetchUser[0].email,
              passcode:passcode
            })
          })

          if(sendEmail.ok){
            router.push(`/passcode/${fetchUser[0].email}/EMS`)
          }else{
            toast('Passcode Verification Email Not Sent, Please Contact Support')
          }
        }else{
          toast('Error creating passcode, please contact support')
        }

      
      }else{
        toast('Email provided does not exist')
      }
    }catch(err:any){
      toast(err.message as string)
    }finally{
      setIsLoading(false)
    }

  }
  return (
    <ForgotPasswordForm
      onSubmit={onSubmit}
      toastContainer={<ToastContainer theme='dark'/>}
      isLoading={isLoading}
      email={email}
      setEmail={setEmail}
    />
  )
}

export default forgotPassword