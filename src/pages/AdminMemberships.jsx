import { Helmet } from 'react-helmet-async';

import AdminMembershipList from './AdminMembershipList';

// ----------------------------------------------------------------------

export default function AdminMembershipsPage() {
  return (
    <>
      <Helmet>
        <title> User |  </title>
      </Helmet>

      <AdminMembershipList />
    </>
  );
}
