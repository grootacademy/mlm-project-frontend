
import Swal from "sweetalert2"

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import AppMemberShipCard from "../overview/app-membership-card";

// ----------------------------------------------------------------------

export default function MyMembershipView() {
  const theme = useTheme();


  const buyProduct = async (amount) => {

    const { value: refralCode } = await Swal.fire({
      imageUrl: "https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg",
      imageHeight: 250,
      text: `Send payment of ₹${amount} to above QR code.`,
      input: "text",
      inputLabel: "Enter refral code",
      inputPlaceholder: "Enter refral code of your friend",
    });

    if (refralCode) {
      Swal.fire({
        title: refralCode,
        text: `Requested to admin for confirming payment with above refral code.`,
      });
    }

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
          <Grid xs={12} sm={6} md={6} onClick={() => buyProduct(1000)}>
            <AppMemberShipCard
              title="Membership duration:  28 days"
              total="1000"
              color="success"
              icon={<img alt="icon" src="/assets/icons/glass/icons8-id-verified-96.png" />}
            />
          </Grid>
          <Grid xs={12} sm={6} md={6} onClick={() => buyProduct(1000)}>
            <AppMemberShipCard
              title="Membership duration:  28 days"
              total="1000"
              color="success"
              icon={<img alt="icon" src="/assets/icons/glass/icons8-id-verified-96.png" />}
            />
          </Grid>

          <Grid xs={12} sm={6} md={6} onClick={() => buyProduct(1000)}>
            <AppMemberShipCard
              title="Membership duration:  28 days"
              total="1000"
              color="success"
              icon={<img alt="icon" src="/assets/icons/glass/icons8-id-verified-96.png" />}
            />
          </Grid>

          <Grid xs={12} sm={6} md={6} onClick={() => buyProduct(1000)}>
            <AppMemberShipCard
              title="Membership duration:  28 days"
              total="1000"
              color="success"
              icon={<img alt="icon" src="/assets/icons/glass/icons8-id-verified-96.png" />}
            />
          </Grid>
          <Grid xs={12} sm={6} md={6} onClick={() => buyProduct(1000)}>
            <AppMemberShipCard
              title="Membership duration:  28 days"
              total="1000"
              color="success"
              icon={<img alt="icon" src="/assets/icons/glass/icons8-id-verified-96.png" />}
            />
          </Grid>

        </Grid>
      </Container>
    </Box >
  );
}
