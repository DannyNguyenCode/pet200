import React from 'react'
import { Box } from '@mui/material'
import '@styles/scrollingText.css'
const TextScrollComponent = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <Box className='marqueeWrapper'>
        <Box className='marquee'>
            {children}
        </Box>
    </Box>
  )
}

export default TextScrollComponent