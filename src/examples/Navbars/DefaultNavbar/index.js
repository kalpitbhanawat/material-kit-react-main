import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import logoImage from "assets/images/logo.svg";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const menuItems = [
    { label: 'About', link: '#' },
    { label: 'Logistics', link: '#' },
    { label: 'Informatics', link: '#' },
    { label: 'ChargeGrid', link: '#' },
    { label: 'Careers', link: '#' },
    { label: 'Our stories', link: '#' },
  ];

  return (
    <AppBar position="fixed" color="default"  sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)', 
      

    }} style={{
      marginTop:'10px',
      marginRight:'20px',
      marginLeft:'20px',
      borderRadius:'50px',
      left: 0,
      right :0,
      width : 'auto'
    }}>

      <Toolbar>
        <img src={logoImage} alt="al" style={{ height: '30px', marginRight: '10px'   }} />
        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          altron
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {menuItems.map((item) => (
            <Button  key={item.label} href={item.link} color="inherit">
              {item.label}
            </Button>
          ))}
           <Button 
    variant="outlined"
    style={{ fontFamily: 'Gilroy-meduim, sans-serif' }}
       sx={{
        height:'24px',
        borderRadius: '50px', // Adjust the value for different levels of roundness
        padding: '10px 20px',
        borderColor:'#07BB8F',
        borderBlockColor:'#07BB8F',
        color:'black'
      }}
      >
        <Typography style={{ fontFamily: 'Gilroy-meduim, sans-serif' ,color:'black' }}
       fontSize={'14px'}
       padding={0}
       textTransform ='none'
       >
        Client Login
        </Typography>

    </Button>
             <Button 
    // variant="outlined"
    style={{ fontFamily: 'Gilroy-meduim, sans-serif' ,paddingTop:'10px'}}
       sx={{
        marginLeft:'10px',
        height:'24px',
        borderRadius: '50px', // Adjust the value for different levels of roundness
        padding: '10px 20px',
        background:'#07BB8F',
        // borderBlockColor:'#07BB8F',
        color:'black',
        transform:'none',
        '&:hover': {
          backgroundColor: '#07BB8F', // Same as default background color
          color: 'white', 
          border: '#07BB8F'    // Same as default text color
        },
      }}
      >
        <Typography style={{ fontFamily: 'Gilroy-meduim, sans-serif' ,color:'#FFFFFF' }}
       fontSize={'14px'}
       padding={0}
       textTransform ='none'
       >
        Get In Touch
        </Typography>

    </Button>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.label} onClick={handleMenuClose} component="a" href={item.link}>
            {item.label}
          </MenuItem>
        ))}
        <MenuItem onClick={handleMenuClose} component="a" href="#">
          Client Login
        </MenuItem>
        <MenuItem onClick={handleMenuClose} component="a" href="#">
          Get in touch
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
