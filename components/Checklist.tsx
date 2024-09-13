'use client'
import { ThemeProvider } from '@emotion/react'
import { Divider, Typography,Box } from '@mui/material'
import Grid from '@mui/material/Grid2'
import checkListHeaderTheme from '@styles/checkListHeaderTheme'
import { Pet } from '@interfaces/pet'

const Checklist = ({data}:{data:Pet}) => {


  return (
      <Box>
          <Grid container>
            <Grid className='' size={{xs:1}} ></Grid>
            <Grid className='' size={10} >
              <ThemeProvider theme={checkListHeaderTheme}>
                  <Typography component={"h1"} className='checklist_header' ><span className='checklist_header_span'>Characteristics</span></Typography>
              </ThemeProvider>
            </Grid>
            <Grid className='' size={1}></Grid>
          </Grid>
          <Grid container>
            <Grid className='' size={1}></Grid>
            <Grid size={10}>                         
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
                <Divider/>
                <Typography className='checklist_lines' component={"p"} style={{height:"30px"}}>
                  <Typography className='checklist_lines_span capitalize' component={"span"}>
                    Description: {data.desc}
                  </Typography>
                </Typography>
                <Divider/>
            </Grid>
              <Grid className='' size={1}></Grid>
          </Grid>
      </Box>
  )
}

export default Checklist