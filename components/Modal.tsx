'use client'
import { forwardRef, useState, Fragment, useEffect } from 'react';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Pet } from '@interfaces/pet';
import {ThemeProvider, Box } from '@mui/material';
import Grid from '@mui/material/Grid2'
import dancingScript from '@styles/dancingScriptTheme'
import Image from 'next/image';
import Checklist from './Checklist';
import checkListHeaderTheme from '@styles/checkListHeaderTheme';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog=({data,image}:{data:Pet, image:string})=> {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        View {data.name} Profile
      </Button>
      <Dialog
        fullScreen
        open={open}
        TransitionComponent={Transition}
        
      >
        <AppBar className='mb-4' sx={{ position: 'relative' }}>
          <Toolbar>
          <ThemeProvider theme={dancingScript}>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h4" component="div" className='text-center py-3'>
                {data.name}'s Profile
              </Typography>
          </ThemeProvider>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              size='large'
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
 
            <Grid container >
                <Grid size={{xs:6}}>
                    <Image priority width={500} height={500} className='profile_image' alt={`${data.name}'s profile picture`} src={image} />
                </Grid>
                
                <Grid size={{xs:6}}>
                  <Grid style={{border: '1 solid black'}}> </Grid>
                  <Checklist data={data}/>
                </Grid>


            
                  <Grid className='' size={{xs:10}}>
                    <ThemeProvider theme={checkListHeaderTheme}>
                        <Typography component={"h1"} className='text-center' ><span className=''>Personality</span></Typography>
                    </ThemeProvider>
                  </Grid>
             
                  <Grid className='' size={{xs:10}}>
                    <Typography className='' component={"p"} style={{height:"30px"}}>
                      <Typography className='' component={"span"}>
                          {data.desc}
                      </Typography>

                    </Typography>
                  </Grid>
            
             
     

       
            </Grid>




      </Dialog>
    </Fragment>
  );
}
export default FullScreenDialog;