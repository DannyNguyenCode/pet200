'use client'
import { getCurrentDate } from '@utils/date'
import React from 'react'
import { useEffect,useState } from 'react'
import ForgotPasswordForm from '@components/ForgotPasswordForm'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { randomizer } from '@utils/randomizer'
const forgotPassword = () => {
  const router = useRouter();
  const [isLoading,setIsLoading] = useState(false);
  useEffect(()=>{
    let date1 = getCurrentDate();
    let date2 = getCurrentDate();
    date2.setMinutes(date1.getMinutes() +16)
    if(date1 < date2){
      console.log("date 1 is less than date 2")
    }else if(date1 > date2){
      console.log("date 1 is greater than date 2")
    }else{
      console.log("Both dates are the same")
    }
    console.log("date1",date1)
    console.log("date2",date2)
    
  },[])
  const onSubmit =async (e:any)=>{
    //check user against email provided is in database
    //if user is there
      //send email
      //redirect to /passcode/userEmail
    //else
      //notify user that user is not found with email provided
    e.preventDefault();
    setIsLoading(true);
    try{
      const fetchUser = await fetch(`/api/users/${e.target.value}`).then((res)=>{
        return res.json();
      });
      if(fetchUser){
        const sendEmail = await fetch(`/api/send`,{
          method:'POST',
          body:JSON.stringify({
            email:fetchUser.email,
            passcode:randomizer()
          })
        })
        if(sendEmail.ok){
          router.push(`/passcode/${fetchUser.email}`)
        }else{
          toast('Passcode Verification Email Not Sent, Please Contact Support')
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
    />
  )
}

export default forgotPassword