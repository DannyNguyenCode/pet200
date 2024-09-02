import OneTimePasscodeForm from '@components/OneTimePasscodeForm'
import React, { useEffect } from 'react'

const OneTimePassCode = ({ params }: { params: { userEmail: string } }) => {
    //get passcode
    //if one exists
      //delete passcode and post new one
    //if does not exist
      //post new one
    
    const getPasscode = async ()=>{
      try{
          const res = await fetch(`api/passcode?user=${params.userEmail}`,{
              method:'GET',
  
          })
          if(res.ok){
       
          }

      }catch(err){
       
      }finally{
  
      }
    }
      useEffect(()=>{
        getPasscode();
      },[])
  return (
    <OneTimePasscodeForm/>
  )
}

export default OneTimePassCode