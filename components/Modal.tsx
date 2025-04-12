'use client'
import { forwardRef, useState } from 'react';
import Button from '@mui/material/Button';
import { useTheme,useMediaQuery } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Pet } from '@interfaces/pet';
import {ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Grid2'
import dancingScript from '@styles/dancingScriptTheme'
import Image from 'next/image';
import Checklist from './Checklist';
import optimizingImage from '@utils/optimizeImage';

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
    const theme = useTheme();
    const smallBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid container>
      <Button variant="outlined" onClick={handleClickOpen}>
        View {data.name} Profile
      </Button>
      <Dialog
        fullScreen={smallBreakpoint?true:false}
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        
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
 
        <Grid className='modalProfileWrapper' container>
            <Grid justifyContent={'center'} display={'flex'} textAlign={'center'} size={{xs:12,md:12}}>
          
              <Image height={300} width={300} className='profile_image' alt={`${data.name}'s profile picture`} src={optimizingImage(image)} />
      
            </Grid>
            
            <Grid size={{xs:12,md:12}}>
              <Checklist data={data}/>
            </Grid>   
        </Grid>




      </Dialog>
    </Grid>
  );
}
export default FullScreenDialog;