'use client'
import RegisterForm from '@components/RegisterForm'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingPage from '@components/LoadingPage';
const page = () => {
    const router= useRouter();
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    const [isLoading,setIsLoading] = useState(false);

    const registerNewUser = async (e:any)=>{
        const bcrypt = require('bcryptjs');
        e.preventDefault();
        setIsLoading(true)
        const hashedPassword = await bcrypt.hash(password,10)
        try{
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
        }catch(err){
            toast(err as string)
        }finally{
            setEmail("")
            setPassword("")
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
            onSubmit={registerNewUser}
            ToastContainer={<ToastContainer theme="dark"/>}
        />

    }

    </>
  )
}

export default page