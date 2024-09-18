'use client'
import React from 'react'
import Grid from '@mui/material/Grid2'
import CardTemplate from '../CardTemplate'
import { Masonry } from '@mui/lab'
import { Pet } from '@interfaces/pet'
import { Stack,Typography,Paper } from '@mui/material'
const MasonryWrapper = ({filterPets}:{filterPets:Pet[]}) => {
  return (

      <Stack spacing={2}>  

        <Masonry columns={{xs: 1, sm:2,md:3,lg:5}} spacing={{xs: 1,sm:4, md:2}}>
            {filterPets.map((pet, i)=>{

             return <CardTemplate i={i} data={pet} key={pet._id} isMasonry={true}/>
            })}
    
        </Masonry>
      </Stack>

  )
}

export default MasonryWrapper