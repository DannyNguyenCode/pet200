'use client'
import { Pet } from '@interfaces/pet'
import CardTemplate from '../CardTemplate'
import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'
import { shuffle } from '@utils/shuffle'
import {Masonry} from '@mui/lab/';
import FilterBar from "@components/dashboard/FilterBar";
import MasonryWrapper from './MasonryWrapper'
const Dashboard = () => {
    const [pets,setPets]=useState<Pet[]>([])
    const [filterPets,setFilteredPets]=useState<Pet[]>([])

    useEffect(()=>{
        const fetchPets = async()=>{
          try{
            const res = await fetch('/api/pet');
            const data:Pet[] = await res.json();
  


            setPets(data)
            setFilteredPets(data)
          }catch(err){
            console.log(err)
          }

        }
        fetchPets();
    },[])
  return (
    <Grid container id='dashboard' columnSpacing={2} size={{xs:12}}>
      <FilterBar setFilterData={setFilteredPets} petData={pets}/>
      <MasonryWrapper filterPets={filterPets}/>
    </Grid>
  )
}

export default Dashboard