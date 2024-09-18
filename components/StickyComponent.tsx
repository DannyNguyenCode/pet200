'use client'
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2'
import React from 'react'

const StickyComponent = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <Box className='stickyComponentContainer'>

            {children}

     
    </Box>
   
  )
}

export default StickyComponent