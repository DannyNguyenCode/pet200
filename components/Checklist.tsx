'use client'
import { ThemeProvider } from '@emotion/react'
import { Divider, Typography,Box } from '@mui/material'
import Grid from '@mui/material/Grid2'
import checkListHeaderTheme from '@styles/checkListHeaderTheme'
import { Pet } from '@interfaces/pet'

const Checklist = ({data}:{data:Pet}) => {


  return (
      <Box>
          <Grid sx={{paddingX:'1em'}} container>
   
            <Grid className='' size={12} >
              <ThemeProvider theme={checkListHeaderTheme}>
                  <Typography component={"h1"} className='checklist_header' ><span className='checklist_header_span'>Characteristics</span></Typography>
              </ThemeProvider>
            </Grid>

          </Grid>
          <Grid sx={{paddingX:'1em'}} container>

            <Grid size={12}>                         
                <Typography className='checklist_lines' component={"p"} style={{height:"30px"}}>
                  <Typography className='checklist_lines_span capitalize' component={"span"}>
                    Breed: {data.breed}
                  </Typography>
                </Typography>
                <Divider/>
                <Typography className='checklist_lines' component={"p"} style={{height:"30px"}}>
                  <Typography className='checklist_lines_span capitalize' component={"span"}>
                    Gender: {data.gender}
                  </Typography>
                </Typography>
                <Divider/>
                <Typography className='checklist_lines' component={"p"} style={{height:"30px"}}>
                  <Typography className='checklist_lines_span capitalize' component={"span"}>
                    Age: {data.age}
                  </Typography>
                </Typography>
                <Divider/>
                <Typography className='checklist_lines' component={"p"} style={{height:"30px"}}>
                  <Typography className='checklist_lines_span capitalize' component={"span"}>
                    Primary Color: {data.primaryColor}
                  </Typography>
                </Typography>
                <Divider/>
                <Typography className='checklist_lines' component={"p"} style={{height:"30px"}}>
                  <Typography className='checklist_lines_span capitalize' component={"span"}>
                    Secondary Colors: {data.secondaryColor.join(', ')}
                  </Typography>
                </Typography>
                <Divider sx={{marginBottom:'1em'}}/>
                  <Typography className='checklist_lines_span capitalize' component={"span"}>
                    Description: {data.desc} Here is a line of text that can overflow
                  </Typography>

            </Grid>

          </Grid>
      </Box>
  )
}

export default Checklist