import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';
import AdminWithdrawalsPage from 'src/pages/AdminWithdrawals';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const AdminMembershipsPage = lazy(() => import('src/pages/AdminMemberships'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const RegisterPage = lazy(() => import('src/pages/register'));
export const HomePage = lazy(() => import('src/pages/Home'));
export const MembershipProducts = lazy(() => import('src/pages/MembershipProducts'));
export const MyMemberships = lazy(() => import('src/pages/MyMemberShips'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      path: "admin",
      children: [
        { element: <IndexPage />, index: true },
        { path: 'memberships', element: <AdminMembershipsPage /> },
        { path: 'withdrawals', element: <AdminWithdrawalsPage /> },
        // { path: 'products', element: <ProductsPage /> },
        // { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/membershipProducts',
      element: <MembershipProducts />,
    },
    {
      path: '/myMemberships',
      element: <MyMemberships />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
