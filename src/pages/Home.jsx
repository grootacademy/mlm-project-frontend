import { Helmet } from 'react-helmet-async';

import HomeView from 'src/sections/home/home-view';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>

      <HomeView />
    </>
  );
}
