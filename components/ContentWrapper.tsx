'use client'
import React from 'react'
import { Box } from '@mui/material';
const ContentWrapper = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <Box id='contentWrapper' >
        {children}
    </Box>
  )
}

export default ContentWrapper