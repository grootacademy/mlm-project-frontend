import { Helmet } from 'react-helmet-async';

import AdminMembershipView from 'src/sections/user/view/admin-memberships-view';

// ----------------------------------------------------------------------

export default function AdminMembershipsPage() {
  return (
    <>
      <Helmet>
        <title> User |  </title>
      </Helmet>

      <AdminMembershipView />
    </>
  );
}
