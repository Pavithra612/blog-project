import React from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Tabs,
  Tab,
  Stack
} from "@mui/material";
//import CreateIcon from '@mui/icons-material/Create';
import { PiReadCvLogo } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";
//import { FaBookReader } from "react-icons/fa";

function NavBar( { loggedIn, setLoggedIn }) {
  let navigate = useNavigate();
 

  return (
    <React.Fragment>
    <AppBar position="static" sx={{background:"#19199e"}}>
      <Toolbar>
        
        <PiReadCvLogo size="1.5em" />
        
        <Typography variant="h6" component="div" sx={{flexGrow :1}}>
          K Pavithra
        </Typography>
        {/* <Stack direction='row' spacing={2}> */}
        {/*<Box> */}
        <Tabs  textcolor="white" value={0} indicatorColor="white">
          <Tab style={{color:'white'}} label="Read Blogs" onClick={()=> navigate('/')}/>
          <Tab style={{color:'white'}} label="Dashboard"onClick={()=>navigate('/dashboard')} />
          <Tab style={{color:'white'}} label="About Me" onClick={()=>navigate('/about')} />
        </Tabs>
          <IconButton edge="start" color="inherit" aria-label="logo" onClick={() => {
                setLoggedIn(false);
                navigate('/login');
              }}>
          <TbLogout size="2.1rem"/>
          </IconButton>
          
          {/* <Button color="inherit">Read Blogs</Button>
          <Button color="inherit">DashBoard</Button>
          <Button color="inherit">About Me</Button> */}
        {/*</Box> */}
        {/* </Stack> */}
      </Toolbar>
    </AppBar>
  </React.Fragment>
  );
}
export default NavBar;