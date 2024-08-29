'use client'
import RegisterForm from '@components/RegisterForm'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
const page = () => {
    const [errorMessage,setErrorMessage] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    const [userAlreadyExists,setUserAlreadyExists]= useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const router = useRouter();
    const registerNewUser = async (e:any)=>{
        e.preventDefault();
        setIsLoading(true)
        try{
            const res = await fetch(`api/register`,{
                method:'POST',
                body:JSON.stringify({
                    email:email,
                    username:'',
                    image:'',
                    loginType:'credentials',
                    password:password,
                })

            })
            if(!res.ok){
                res.text().then((text)=>{
                    setUserAlreadyExists(true)
                    setErrorMessage(text);
                
                })
            }
            if(res.ok){
                res.text().then((text)=>{
                    setUserAlreadyExists(false)
                    setErrorMessage(text);
                
                })
                signIn("credentials",{redirect:false, email:email,password:password}).then((res:any)=>{
                    if(res?.status === 200){
                      router.push("/profile")
                    }
                })
            }
        }catch(err){
            setErrorMessage(err as string)
        }

    }
  return (
    <RegisterForm
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        userAlreadyExists={userAlreadyExists}
        setUserAlreadyExists={setUserAlreadyExists}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onSubmit={registerNewUser}
    />
  )
}

export default page