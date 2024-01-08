import { Helmet } from 'react-helmet-async';

import "src/sections/login/loginstyle.css"
import { LoginView } from 'src/sections/login';
import { LoginHeader } from 'src/sections/login/header';

// ----------------------------------------------------------------------
export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Register </title>
      </Helmet>
      <LoginHeader />
      <LoginView />
    </>
  );
}
