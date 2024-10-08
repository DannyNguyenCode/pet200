'use client'
import { Box, ThemeProvider,Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import {getDancingScript,getAclonica} from '@styles/profileTheme'
import { useEffect } from 'react'
import { Pet } from '@interfaces/pet'
import CardTemplate from './CardTemplate'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { AddPetButton } from '@styles/buttonThemes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Profile = (
  {
    pets,
    message
  }:
  {
    pets:Pet[],
    message?:string

  }) => {
  useEffect(()=>{
      if(message && message[0] === "SLI"){
        toast("Successfully Logged In")
      }
      else{
        console.log("")
      }
    },[])

  return (

      <Grid container>
          <ToastContainer theme="dark"/>
          <Grid size={12} textAlign={'center'} >
              <ThemeProvider theme={getAclonica()}>
                <Typography style={{margin: getAclonica().spacing(3)}} component={"h1"}><span>Danny's Profile</span></Typography>
              </ThemeProvider>
          </Grid>
        
          <Grid className='border p-4' container size={{xs:12, md:6}}>            
                  <Grid size={{xs:12}}  >
                      <ThemeProvider theme={getDancingScript()}>
                        <Typography className='pl-4' component={"h1"}><span>About</span></Typography>
                      </ThemeProvider>
  
                      <Typography className='pl-4' component={"p"}>
                        <Typography component={"span"}>
                          We are here to help Pets get adopted and find their forever home. With this application, we want to make it easier for people to find pets that are in need of a home. Our goal is to have one place, partnering with shelters around the world, where people can find all the pets that need a forever home.
                        </Typography>
                      </Typography>
                  </Grid>               
          </Grid>

     
          <Grid className='border p-4' container size={{xs:12, md:6}}>
                <Grid size={{xs:12}} >
                    <ThemeProvider theme={getDancingScript()}>
                      <Typography className='pl-4' component={"h1"} ><span className=''>Contact</span></Typography>
                    </ThemeProvider>
                    <Typography className='address pl-4' component={"p"}>           
                        <Typography component={"span"}>Address: </Typography> <Typography component={"span"}>123 Fake Street, Toronto Ontario, M94 3Y6</Typography>           
                    </Typography>

                    <Typography className='pt-2 pl-4 phone' component={"p"}>              
                      <Typography component={"span"}>Phone Number: </Typography><Typography component={"span"}> (456) 687 - 1489</Typography>  
                    </Typography>

                    <Typography className='pt-2 pl-4 email' component={"p"}>
                        <Typography component={"span"}>Email: </Typography><Typography component={"span"}>somethingExample@example.com</Typography>
                    </Typography>
                    <Typography className='pt-2 pl-4 website' component={"p"}>
                        <Typography component={"span"}>Website: </Typography><Typography component={"span"}>www.petfoundation.com</Typography>
                    </Typography>
                </Grid>
          </Grid>
          <Grid container size={12}>
            <Grid size={{xs:6}}>
                <ThemeProvider theme={getDancingScript()}>
                    <Typography className='pl-4' component={"h1"}><span className=''>Current Pets</span></Typography>
                </ThemeProvider>
            </Grid>
            <Grid alignContent={'center'} size={{xs:6}}>
                <AddPetButton LinkComponent={'a'} href='/addPet' onClick={()=>{}} variant="outlined" size='medium' endIcon={<AddCircleOutlineIcon />}>Add Pet</AddPetButton>
            </Grid>  
          </Grid>
          <Grid className='p-4' spacing={2} container size={{xs:12}}>

            {pets.map((pet,i)=>{
              return(
                <Grid key={pet._id} size={{xs:12,md:2}}>
              
                    <CardTemplate i={i} data={pet} isMasonry={false}/>
               
                </Grid>
              )
            })}  
          </Grid>


         
      </Grid>
   
  )
}

export default Profile