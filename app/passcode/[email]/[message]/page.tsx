'use client'
import OneTimePasscodeForm from '@components/OneTimePasscodeForm'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
const OneTimePassCode = ({ params }: { params: { email: string,message:string } }) => {
    const [passcode,setPasscode]= useState('')
    const [isLoading,setIsLoading]= useState(false)
    const router = useRouter();
    const onSubmit = async (e:any)=>{
      e.preventDefault();
      setIsLoading(true)
      let emailString = params.email.replace('%40','@');

      try{
          const res = await fetch(`/api/passcode?user=${emailString}`,{
              method:'GET',
  
          })
          if(res.ok){
            let response = await res.json();
            //validate passcode is not expired
            if(response[0].passcode !== passcode){
              toast("Passcode enter is incorrect")
            }
            else if(response[0].issueDate > response[0].expiryDate){
              toast("Passcode as expired, please request another by clicking Resend button")
            }else{
              //success
              router.push('/newpassword')
            }
          }

      }catch(err:any){
        toast(err.message as string)
      }finally{
        setIsLoading(false)
        setPasscode('')
      }
    }
    useEffect(()=>{
      if(params.message === "EMS"){
        toast("Email with passcode has been sent")
      }
    },[])
  return (
    <>
 
      <OneTimePasscodeForm
      toastContainer={<ToastContainer theme='dark'/>}
      onSubmit={onSubmit}
      isLoading={isLoading}
      passcode={passcode}
      setPasscode={setPasscode}
      />
    </>
  )
}

export default OneTimePassCode