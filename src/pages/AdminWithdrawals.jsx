import { Helmet } from 'react-helmet-async';

import { AdminWithdrawals } from 'src/sections/admin-withdrawals/view';

// ----------------------------------------------------------------------

export default function AdminWithdrawalsPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <AdminWithdrawals />
    </>
  );
}
