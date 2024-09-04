'use client'
import RegisterForm from '@components/RegisterForm'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingPage from '@components/LoadingPage';


const page = () => {
    const router= useRouter();   
    const bcrypt = require('bcryptjs');
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    const [confirm,setConfirm]=useState('')
    const [isLoading,setIsLoading] = useState(false);
    const [showPassword,setShowPassword]=useState(false)
    const [showConfirm,setShowConfirm]=useState(false)
  
    const registerNewUser = async (e:any)=>{
        e.preventDefault();
        setIsLoading(true)
        try{
                const hashedPassword = await bcrypt.hash(password,10)
                const res = await fetch(`api/register`,{
                    method:'POST',
                    body:JSON.stringify({
                        email:email,
                        username:'',
                        image:'',
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
                    router.push("/login/SR")   
    
                    
    
                }
        }catch(err:any){
            console.log("err",err)           
        }finally{
            setEmail("")
            setPassword("")
            setConfirm("")
            setIsLoading(false)

        }

    }
  return (
    <>{isLoading? 
        <LoadingPage/>
        :<RegisterForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirm={confirm}
            setConfirm={setConfirm}
            onSubmit={registerNewUser}
            toast={toast}
            ToastContainer={<ToastContainer theme="dark"/>}
            isLoading={isLoading}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showConfirm={showConfirm}
            setShowConfirm={setShowConfirm}

        />

    }

    </>
  )
}

export default page