
'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState,useEffect } from 'react';
import {signIn,signOut,useSession,getProviders} from 'next-auth/react';
import { AddPetButton, SigninButton } from '@styles/buttonThemes';



function ResponsiveAppBar() {
  const [providers, setProviders] = useState(null);

  const {data:session,status}= useSession();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  useEffect(()=>{
    const fetchProviders = async ()=>{
        const response:any = await getProviders();
        setProviders(response);
    }
    fetchProviders();
  },[])

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const mobileView =()=>{
    return (
      <Box sx={{ flexGrow: 1, display:{xs:'flex',sm:'none'}, justifyContent:'end' }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={session?.user?.name as string} src={session?.user?.image as string} />
            </IconButton>
          </Tooltip>
          {status.toLowerCase() === 'authenticated'.toLowerCase()
          ?<Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
          >
              <MenuItem component={'a'} href='/profile'>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={()=>{signOut({callbackUrl:'/', redirect:true});} }>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
          </Menu>
          :<Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                {providers && Object.values(providers).map((provider:any)=>{
                   return (
                    <MenuItem key={provider.id}  onClick={()=>signIn(provider.id,{callbackUrl:'/',redirect:true})}>
                      <Typography textAlign="center">Signin</Typography>
                    </MenuItem>
                    )
                })}

          </Menu>
        }
      </Box>
    )
  }
  const desktopView = ()=>{
    return (
      <Box>
          {status.toLowerCase() === 'authenticated'.toLowerCase()
          ?<Box sx={{flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          
                <MenuItem component={'a'} href='/profile'>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={()=>{signOut({callbackUrl:'/', redirect:true});} }>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>

          </Box>
          :<Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              {/* {providers && Object.values(providers).map((provider:any)=>{
                   return (
                    <MenuItem key={provider.id} onClick={()=>signIn(provider.id,{callbackUrl:'/',redirect:true})}>
                      <Typography textAlign="center">Sigin</Typography>
                    </MenuItem>
                    )
                })} */}
              <SigninButton LinkComponent={'a'} href='/login'>Sigin</SigninButton>

              
          </Box>  
          }
      </Box>
    )
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{justifyContent: 'space-between'}} disableGutters>
          <Typography
            variant={"h6"}
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
           
          >
            PET200
          </Typography>

            {/* Mobile Line 41 */}
            {mobileView()}


            {/* Desktop Line 102 */}
            {desktopView()}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
