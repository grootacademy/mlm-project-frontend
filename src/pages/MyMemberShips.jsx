import { Helmet } from 'react-helmet-async';

import MyMembershipView from 'src/sections/myMembership/my-membership-view';

// ----------------------------------------------------------------------

export default function MyMembershipPage() {
  return (
    <>
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>

      <MyMembershipView />
    </>
  );
}
