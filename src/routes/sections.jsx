import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import UserLayout from 'src/layouts/user';
import DashboardLayout from 'src/layouts/dashboard';
import AdminUserList from 'src/pages/AdminUserList';
import AdminAddProduct from 'src/pages/AdminAddProduct';
import AdminProductList from 'src/pages/AdminProductList';
import AdminWithdrawalsPage from 'src/pages/AdminWithdrawals';
import DepositHistoryPage from 'src/pages/DepositHistoryPage';
import WithDrawalHistoryPage from 'src/pages/WithdrawalHistoryPage';

import PublicRoute from 'src/components/PublicRoute';
import PrivateRoute from 'src/components/PrivateRoute';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const AdminMembershipsPage = lazy(() => import('src/pages/AdminMemberships'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const RegisterPage = lazy(() => import('src/pages/register'));
export const HomePage = lazy(() => import('src/pages/Home'));
export const MembershipProducts = lazy(() => import('src/pages/MembershipProducts'));
export const UserProfile = lazy(() => import('src/pages/UserProfile'));
export const UpdateProfile = lazy(() => import('src/pages/UpdateProfile'));

export const WithdrawalAmount = lazy(() => import('src/pages/WithdrawalAmount'));

export const MembershipDetails = lazy(() => import('src/pages/MembershipDetails'));
export const ChangePassword = lazy(() => import('src/pages/ChangePassword'));
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
        { path: 'userList', element: <AdminUserList /> },
        { path: 'productList', element: <AdminProductList /> },
        { path: 'addProduct', element: <AdminAddProduct /> },
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
        { path: 'profile', element: <UserProfile /> },
        { path: 'updateProfile', element: <UpdateProfile /> },

        { path: 'WithdrawalAmount', element: <WithdrawalAmount /> },
        { path: 'depositHistory', element: <DepositHistoryPage /> },
        { path: 'withdrawalHistory', element: <WithDrawalHistoryPage /> },
        { path: 'changePassword', element: <ChangePassword /> },
        { path: 'membershipDetails', element: <MembershipDetails /> },
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
