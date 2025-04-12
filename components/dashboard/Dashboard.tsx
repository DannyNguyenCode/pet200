'use client'
import { Pet } from '@interfaces/pet'
import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'
import FilterBar from "@components/dashboard/FilterBar";
import MasonryWrapper from './MasonryWrapper'
import StickyComponent from '@components/StickyComponent';
import { Box, Divider, Typography } from '@mui/material';
import TextScrollComponent from '@components/TextScrollComponent/TextScrollComponent';
export const revalidate = 0 // seconds
const Dashboard = () => {
    const [pets,setPets]=useState<Pet[]>([])
    const [filterPets,setFilteredPets]=useState<Pet[]>([])

    useEffect(()=>{
        const fetchPets = async()=>{
          try{
            const res = await fetch('/api/pet',{
              cache:'no-store',
              next: { revalidate: 0 }
            });
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
        <Box sx={{marginBottom:{xs:'0',md:'2rem'}}} className='dashboardTitleCtonainer'>
          <TextScrollComponent>
            <Box id='dashboardTitle' component={'p'}>Welcome to Pet 200</Box>

          </TextScrollComponent>
        </Box>
        <Grid id='filterbarWrapper'sx={{
          marginBottom:{
            xs:'0rem',
            md:'0rem'
          }
        }} size={{xs:12,md:10}}>
            <StickyComponent>
              <FilterBar setFilterData={setFilteredPets} petData={pets}/>
            </StickyComponent>
        </Grid>
        <Grid sx={{margin:{xs:'0',md:'2rem'}}} container id='masonryWrapper' size={{xs:12,md:10}}>
          <MasonryWrapper filterPets={filterPets}/>
        </Grid>
    </Grid>
  )
}

export default Dashboard