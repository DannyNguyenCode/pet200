'use client'
import React from 'react'
import CardTemplate from '../CardTemplate'
import { Masonry } from '@mui/lab'
import { Pet } from '@interfaces/pet'
const MasonryWrapper = ({filterPets}:{filterPets:Pet[]}) => {
  return (
 

        <Masonry sx={{marginX:'0.2em'}} columns={{xs:1,sm:1,md:3,lg:4}} >
            {filterPets.map((pet, i)=>{

             return <CardTemplate i={i} data={pet} key={pet._id} isMasonry={true}/>
            })}
    
        </Masonry>


  )
}

export default MasonryWrapper