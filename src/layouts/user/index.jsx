import PropTypes from 'prop-types';

import Header from './header';

// ----------------------------------------------------------------------

export default function UserLayout({ children }) {

  // const navigate = useNavigate()

  // useEffect(() => {

  //   if (Cookies.get("role") !== "user") {
  //     navigate("/admin")
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <>
      <Header />
      {children}

    </>
  );
}

UserLayout.propTypes = {
  children: PropTypes.node,
};
