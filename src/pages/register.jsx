import { Helmet } from 'react-helmet-async';

import { RegisterView } from 'src/sections/register';
import { RegisterHeader } from 'src/sections/register/header';

// ----------------------------------------------------------------------

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title> Login |  </title>
      </Helmet>

      <RegisterHeader />

      <RegisterView />
    </>
  );
}
