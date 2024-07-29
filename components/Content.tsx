'use client'
import { Pet } from '@interfaces/pet'
import CardTemplate from './CardTemplate'
import { useEffect, useState } from 'react'
import { shuffle } from '@utils/shuffle'
import {Masonry} from '@mui/lab/';
import FilterBar from "@components/FilterBar";
const Content = () => {
    const [pets,setPets]=useState<Pet[]>([])
    const [filterPets,setFilteredPets]=useState<Pet[]>([])

    useEffect(()=>{
        const fetchPets = async()=>{
            const res = await fetch('/api/pet');
            const data:Pet[] = await res.json();

            setPets(data)
            setFilteredPets(data)
        }
        fetchPets();
    },[])
  return (
    <div className='flex flex-col'>
      <FilterBar setFilterData={setFilteredPets} petData={pets}/>
      <Masonry columns={{xs: 1, sm:2,md:3,lg:4}} spacing={{xs: 0,sm:4, md:2}}>
           {filterPets.map((pet, i)=>{

            return <CardTemplate i={i} data={pet} key={pet._id} isMasonry={true}/>
            })}
  
      </Masonry>
    </div>
  )
}

export default Content