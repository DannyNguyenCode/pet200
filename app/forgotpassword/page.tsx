'use client'
import { getCurrentDate } from '@utils/date'
import React from 'react'
import { useState,useEffect } from 'react'
const forgotPassword = () => {
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
  return (
    <div>page</div>
  )
}

export default forgotPassword