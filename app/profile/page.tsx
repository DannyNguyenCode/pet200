'use client'
import Profile from '@components/Profile'
import { Pet } from '@interfaces/pet';
import { useSession } from "next-auth/react"
import { useEffect, useState } from 'react';

const MyProfile = () => {
  const {data:session}= useSession();
  const [pets,setPets]= useState<Pet[]>([]);
  useEffect(()=>{

    const fecthPets = async ()=>{
      const response = await fetch(`/api/users/${session?.user?.id}/pets`);
      const data = await response.json();
      setPets(data)
    }
    if(session?.user?.id) fecthPets();
  },[session])


  return (
    
    <Profile 
    pets={pets}

    />
  )
}

export default MyProfile;