'use client'
import React from 'react'
import Grid from '@mui/material/Grid2'
const ContentWrapper = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <Grid id='contentWrapper' container>
        {children}
    </Grid>
  )
}

export default ContentWrapper