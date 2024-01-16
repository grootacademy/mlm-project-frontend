/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
import * as React from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const pages = [
  { label: 'Membership plans', path: "/membershipProducts" },
  { label: 'My memberships', path: "/myMemberships" },
];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const navigate = useNavigate()

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAvatarOptionClick = (key) => {
    Cookies.remove("token")
    navigate("/login")
  }

  const isAdmin = Cookies.get("role") === "admin";

  return (
    <AppBar position="sticky" sx={{
      background: "linear-gradient(to left, #b8a1e5, #5206ea)",
      zIndex: 1000
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/" style={{ color: "white" }}>
              Home

            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src='/assets/logo.png' width={50} style={{ borderRadius: "10px" }} />

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (

              <Link to={page.path} key={page.label}>

                <Button

                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }} alignItems="center">
            <Tooltip >
              <IconButton sx={{ p: 0 }}>
                {/* <Avatar /> */}
                <Link to="/userDashboard"> <button className="btn btn-primary" style={{ backgroundColor: "blueviolet", color: "white", border: "1px solid blueviolet" }} >Profile</button></Link>
              </IconButton>
            </Tooltip>
            <button className='btn btn-danger mx-2' style={{ backgroundColor: "white", color: "blueviolet", border: "1px solid blueviolet" }} onClick={handleAvatarOptionClick}> Logout</button>
            {isAdmin && <button className='btn btn-danger' style={{ backgroundColor: "white", color: "blueviolet", border: "1px solid blueviolet" }} onClick={() => navigate('/admin')}>Admin</button>}
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default ResponsiveAppBar;