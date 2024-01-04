
import axios from 'axios';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { BaseUrl } from 'src/Base_url';
import { bgGradient } from 'src/theme/css';

import AppMemberShipCard from "../overview/app-membership-card";

// ----------------------------------------------------------------------

export default function MyMembershipView() {
  const theme = useTheme();

  const [memberships, setMemberships] = useState([])

  const getMemberships = async () => {
    try {
      const { data } = await axios.get(`${BaseUrl}memberships/user`, { withCredentials: true })
      setMemberships(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMemberships()
  }, [])

  if (memberships.length === 0) {
    return (
      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: '/assets/background/overlay_4.jpg',
          }),
          height: 1,
        }}
      >
        <Container>
          <Typography paddingTop="50px" textAlign='center' sx={{ mb: 5 }}>
            Looks like there is no membership.
          </Typography>

          <Typography variant="h4" paddingTop="50px" textAlign='center' sx={{ mb: 5 }}>
            Please buy a membership
          </Typography>
        </Container>
      </Box>
    )
  }

  return (

    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Container>
        <Typography variant="h4" paddingTop="50px" textAlign='center' sx={{ mb: 5 }}>
          My Memberships
        </Typography>

        <Grid container spacing={3} overflow='auto' height="80vh">

          {memberships.map(membership => (
            <Grid xs={12} sm={6} md={6}>
              <AppMemberShipCard
                title={`Membership duration:  ${membership?.product?.duration} days`}
                total={membership?.product?.amount}
                color="success"
                status={membership.status}
                icon={<img alt="icon" src="/assets/icons/glass/icons8-id-verified-96.png" />}
                referralCode={membership.referralCode}
                addedMembers={membership.addedMembers}
                approvalStatus={membership.approvedStatus}
                createdOn={membership.createdOn}
              />
            </Grid>)
          )}

        </Grid>


      </Container>
    </Box >
  );
}