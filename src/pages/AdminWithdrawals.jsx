import { Helmet } from 'react-helmet-async';

import AdminWithdrawalsView from 'src/sections/admin-withdrawals/admin-withdrawals-view';

// import { AdminWithdrawals } from 'src/sections/admin-withdrawals';
// import AdminWithdrawalsView from 'src/sections/admin-withdrawals/admin-withdrawals-view';

// ----------------------------------------------------------------------

export default function AdminWithdrawalsPage() {
  return (
    <>
      <Helmet>
        <title> User |  </title>
      </Helmet>

      <AdminWithdrawalsView />
    </>
  );
}
