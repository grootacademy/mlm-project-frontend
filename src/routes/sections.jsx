import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import UserLayout from 'src/layouts/user';
import DashboardLayout from 'src/layouts/dashboard';
import AdminWithdrawalsPage from 'src/pages/AdminWithdrawals';

import PublicRoute from 'src/components/PublicRoute';
import PrivateRoute from 'src/components/PrivateRoute';

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
            <PrivateRoute>
              <Outlet />
            </PrivateRoute>
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
      element: (
        <UserLayout>
          <Suspense>
            <PrivateRoute>
              <Outlet />
            </PrivateRoute>
          </Suspense>
        </UserLayout>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: 'membershipProducts', element: <MembershipProducts /> },
        { path: 'myMemberships', element: <MyMemberships /> },
        // { path: 'products', element: <ProductsPage /> },
        // { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <PublicRoute> <LoginPage /></PublicRoute>,
    },
    {
      path: '/register',
      element: <PublicRoute><RegisterPage /></PublicRoute>,
    },
    // {
    //   path: '/',
    //   element: <PrivateRoute> <HomePage /></PrivateRoute>,
    // },
    // {
    //   path: '/membershipProducts',
    //   element: <PrivateRoute> <MembershipProducts /></PrivateRoute>,
    // },
    // {
    //   path: '/myMemberships',
    //   element: <PrivateRoute> <MyMemberships /> </PrivateRoute>,
    // },
    {
      path: '404',
      element: <PublicRoute> <Page404 /></PublicRoute>,
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);

  return routes;
}