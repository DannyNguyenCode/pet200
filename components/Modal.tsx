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
import {ThemeProvider, Box,Grid } from '@mui/material';
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
                {data.name} Profile
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
        <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={{xs:1, sm:1, md:2, lg:2}} spacing={2}>
                <Grid alignContent={'center'} item xs={1}>
                    <Image className='profile_image' alt={`${data.name}'s profile picture`} src={image} width={500} height={500}/>
                </Grid>
                
                <Grid item xs={1}>
                  <Grid item style={{border: '1 solid black'}}> </Grid>
                  <Checklist data={data}/>
                </Grid>


                <Grid item xs={1} md={12}>
                      <Grid container>
                        <Grid className='' xs={1} item></Grid>
                        <Grid className='' xs={10} item>
                          <ThemeProvider theme={checkListHeaderTheme}>
                              <Typography component={"h1"} className='text-center' ><span className=''>Personality</span></Typography>
                          </ThemeProvider>
                        </Grid>
                        <Grid className='' xs={1} item></Grid>
                        <Grid container>
                                <Grid className='' xs={1} item></Grid>
                                <Grid className='' item xs={10} md={10}>
                                  <Typography className='' component={"p"} style={{height:"30px"}}>
                                    <Typography className='' component={"span"}>
                                        {data.desc}
                                    </Typography>
                                    <Typography className=' ' component={"span"}>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur, ante id viverra finibus, ante sem pellentesque purus, nec lobortis turpis risus a leo. In hac habitasse platea dictumst. Integer ac odio euismod, varius mi ut, consectetur ligula. Etiam ultrices sem eu nisl laoreet luctus. Vivamus viverra elementum libero nec vehicula. In at tortor est. Pellentesque lectus lectus, lobortis sed justo ut, scelerisque vulputate sem. Cras placerat diam ipsum, non sollicitudin sem ultricies sit amet. 
                                    </Typography>
                                  </Typography>
                                </Grid>
                                <Grid className='' xs={1} item></Grid>
                          </Grid>
                      </Grid>
                </Grid>

       
              </Grid>

        </Box>


      </Dialog>
    </Fragment>
  );
}
export default FullScreenDialog;