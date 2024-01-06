/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
import * as React from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { TbLogout } from "react-icons/tb";

const pages = [
  { label: 'Membership plans', path: "/membershipProducts" },
  { label: 'My memberships', path: "/myMemberships" },
];

const settings = [
  // { key: 'profile', label: "Profile" },
  { key: "myMemberships", label: 'My Memberships' },
  { key: "membershipProducts", label: 'Membership Plans' },
  { key: "logout", label: 'Logout' }
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate()

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleAvatarOptionClick = (key) => {

    console.log("first", key)
    if (key === 'logout') {
      Cookies.remove("token")
      handleCloseNavMenu();
      navigate("/logout")
    } else {
      handleCloseNavMenu();
      navigate(`/${key}`)
    }
  }

  return (
    <AppBar position="sticky" sx={{
      background: "linear-gradient(to left, #b8a1e5, #5206ea)"
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
            <Link to="/" style={{ color: "white" }}>HOME</Link>
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
            LOGO
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="My Account">
              <IconButton sx={{ p: 0 }}>
                {/* <Avatar /> */}
                <Link to="/profile"> <button className="btn btn-primary me-3" >MyAccount</button></Link>
              </IconButton>
            </Tooltip>
            <button className='p-2 h4 rounded-5   btn-danger' style={{ backgroundColor: "white", color: "blueviolet", border: "1px solid blueviolet" }} onClick={() => handleAvatarOptionClick("logout")}> <TbLogout /></button>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;