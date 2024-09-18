'use client'
import { Pet } from '@interfaces/pet'
import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'
import FilterBar from "@components/dashboard/FilterBar";
import MasonryWrapper from './MasonryWrapper'
import StickyComponent from '@components/StickyComponent';
import { Box, Divider, Typography } from '@mui/material';
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
        <Divider id='dashboardDivider'/>
        <Typography id='dashboardTitle' variant='h4'><Box component={'p'}>Welcome to Pet 200</Box></Typography>
        <Grid id='filterbarWrapper'sx={{
          marginBottom:{
            xs:'2rem',
            md:'0rem'
          }
        }} size={{xs:12,md:2}}>
            <StickyComponent>
              <FilterBar setFilterData={setFilteredPets} petData={pets}/>
            </StickyComponent>
        </Grid>
        <Grid container id='masonryWrapper' size={{xs:12,md:8}}>
          <MasonryWrapper filterPets={filterPets}/>
        </Grid>
    </Grid>
  )
}

export default Dashboard