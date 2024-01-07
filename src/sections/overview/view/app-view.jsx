// eslint-disable-next-line perfectionist/sort-imports
// eslint-disable-next-line import/order
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { BaseUrl } from 'src/Base_url';

import AppWidgetSummary from '../app-widget-summary';

export default function AppView() {
  const [dashboardInfo, setDashboardInfo] = useState({})

  const getDashboardInfo = async () => {
    try {
      const { data } = await axios.get(`${BaseUrl}adminDashboard`, { withCredentials: true })
      console.log(data)
      setDashboardInfo(data)
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }

  }

  useEffect(() => {
    getDashboardInfo()
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography paddingTop="50px" variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back 👋
        </Typography>
      </Grid>

      <Grid container spacing={3}>

        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Total user connected"
            total={dashboardInfo.userCount}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Total memberships"
            total={dashboardInfo.membershipCount}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/icons8-id-verified-96.png" />}
          />
        </Grid>

      </Grid>
      <Grid container spacing={3}>

        <Grid xs={12} sm={6} md={4}>
          <Link to="/admin/memberships">
            <AppWidgetSummary
              title="Membership requests"
              color="success"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
            />
          </Link>
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <Link to="/admin/withdrawals">
            <AppWidgetSummary
              title="Withdrawal requests"
              color="info"
              icon={<img alt="icon" src="/assets/icons/glass/icons8-id-verified-96.png" />}
            />
          </Link>
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <Link to='/admin/productList'>
            <AppWidgetSummary
              title="Product management"
              color="info"
              icon={<img alt="icon" src="/assets/icons/glass/icons8-id-verified-96.png" />}
            />
          </Link>
        </Grid>

      </Grid>
    </Container>
  );
}
