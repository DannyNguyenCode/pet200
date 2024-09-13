'use client'
import React from 'react'
import Grid from '@mui/material/Grid2'
import CardTemplate from '../CardTemplate'
import { Masonry } from '@mui/lab'
import { Pet } from '@interfaces/pet'
const MasonryWrapper = ({filterPets}:{filterPets:Pet[]}) => {
  return (
    <Grid container id='masonryWrapper' size={{xs:12,md:9}}>
        <Masonry columns={{xs: 1, sm:2,md:3,lg:5}} spacing={{xs: 1,sm:4, md:2}}>
            {filterPets.map((pet, i)=>{

             return <CardTemplate i={i} data={pet} key={pet._id} isMasonry={true}/>
            })}
    
        </Masonry>
    </Grid>
  )
}

export default MasonryWrapper