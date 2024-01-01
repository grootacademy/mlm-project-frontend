import { Helmet } from 'react-helmet-async';

import MembershipProductsView from 'src/sections/membership-products/membership-products-view';

// ----------------------------------------------------------------------

export default function MembershipProductsPage() {
  return (
    <>
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>

      <MembershipProductsView />
    </>
  );
}
