import PropTypes from 'prop-types';

import Header from './header';

// ----------------------------------------------------------------------

export default function UserLayout({ children }) {

  // const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <Header />
      {children}

      {/* <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} /> */}

      {/* </Box> */}
    </>
  );
}

UserLayout.propTypes = {
  children: PropTypes.node,
};
