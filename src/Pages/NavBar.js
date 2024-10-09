import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Tabs,
  Tab,
  Stack,
} from "@mui/material";
//import CreateIcon from '@mui/icons-material/Create';
import { PiReadCvLogo } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";
//import { FaBookReader } from "react-icons/fa";

function NavBar({ loggedIn, setLoggedIn }) {
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <AppBar position="static" sx={{ background: "rgb(16, 16, 109)" }}>
        <Toolbar>
          {/* <PiReadCvLogo size="1.5em" /> */}

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            K Pavithra
          </Typography>
          {/* <Stack direction='row' spacing={2}> */}
          {/*<Box> */}
          <Tabs  textcolor="white" indicatorColor="white" >
          <Tab sx={{ color: 'white', fontSize: '1rem' }}  label="Read Blogs" onClick={()=> navigate('/')}/>
          <Tab sx={{ color: 'white', fontSize: '1rem' }}  label="Dashboard"onClick={()=>navigate('/dashboard')} />
          <Tab sx={{ color: 'white', fontSize: '1rem' }}  label="About Me" onClick={()=>navigate('/about')} />
        </Tabs>
          
          <IconButton
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={() => {
              setLoggedIn(false);
              navigate("/login");
            }}
          >
            <TbLogout size="1.8rem" />
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
