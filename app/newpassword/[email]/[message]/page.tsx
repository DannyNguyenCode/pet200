'use client'
import NewPasswordForm from '@components/NewPasswordForm'
import React, { useState } from 'react'
import LoadingPage from '@components/LoadingPage'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

const page = ({ params }: { params: { email: string,message:string } }) => {

    const [password,setPassword]= useState('');
    const [confirm,setConfirm]=useState('')
    const [isLoading,setIsLoading] = useState(false);
    const [showPassword,setShowPassword]=useState(false)
    const [showConfirm,setShowConfirm]=useState(false)
    const router=useRouter();
    const bcrypt = require('bcryptjs');

    const onSubmit = async (e:any)=>{
      e.preventDefault();
      setIsLoading(true)
      try{
              const hashedPassword = await bcrypt.hash(password,10)

              const res = await fetch(`/api/users/${params.email}`,{
                  method:'PUT',
                  body:JSON.stringify({
                      email:params.email.replace("%40","@"),
                      loginType:'credentials',
                      password:hashedPassword,
                  })
  
              })
              if(!res.ok){
                  res.text().then((text)=>{
                      toast(text)
                  
                  })
              }
              if(res.ok){
                  router.push("/login/SUP")   

              }
      }catch(err:any){
          console.log("err",err)           
      }finally{
          setPassword("")
          setConfirm("")
          setIsLoading(false)

      }
    }
  return (
    <>{isLoading? 
      <LoadingPage/>
      :<NewPasswordForm

          password={password}
          setPassword={setPassword}
          confirm={confirm}
          setConfirm={setConfirm}
          onSubmit={onSubmit}
          toast={toast}
          ToastContainer={<ToastContainer theme="dark"/>}
          isLoading={isLoading}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showConfirm={showConfirm}
          setShowConfirm={setShowConfirm}
          message={params.message}

      />

  }

  </>
  )
}

export default page