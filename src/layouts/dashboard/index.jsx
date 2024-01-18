import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { TbLogout } from 'react-icons/tb';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import Nav from './nav';
import Main from './main';
import Header from './header';
// import Header from '../user/header';
// import Header from './header';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);

  const navigate = useNavigate()

  const handleLogout = () => {
    Cookies.remove("token")
    navigate("/login")
  }

  useEffect(() => {

    if (Cookies.get("role") !== "admin") {
      navigate("/")
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>
          <div className='d-flex justify-content-end'>
            <Button variant='outlined' onClick={handleLogout} className=' mt-5 p-2'> <TbLogout size="25" /></Button>
            <Button variant='outlined' onClick={() => navigate('/userDashboard')} className='mx-1 mt-5'> user Dashboard</Button>
          </div>

          <div>
            {children}
          </div>
        </Main>
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
