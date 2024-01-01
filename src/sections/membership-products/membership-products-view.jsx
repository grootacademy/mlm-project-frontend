
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from "sweetalert2"

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import AppWidgetSummary from '../overview/app-widget-summary';

// ----------------------------------------------------------------------

export default function MembershipProductsView() {
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

    const { value: transectionId } = await Swal.fire({
      input: "text",
      inputLabel: "Enter transection id",
    });

    if (refralCode) {
      Swal.fire({
        title: refralCode,
        html: `Requested to admin for confirming payment with above refral code. With transection Id <b> ${transectionId} </b>`
      });
    }

    // Swal.fire({
    //   imageUrl: "https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg",
    //   imageHeight: 300,
    //   imageAlt: "A tall image"
    // });
  }

  // const renderForm = (
  //   <>
  //     <Stack spacing={3}>
  //       <TextField name="email" label="Email address" />

  //       <TextField
  //         name="password"
  //         label="Password"
  //         type={showPassword ? 'text' : 'password'}
  //         InputProps={{
  //           endAdornment: (
  //             <InputAdornment position="end">
  //               <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
  //                 <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
  //               </IconButton>
  //             </InputAdornment>
  //           ),
  //         }}
  //       />
  //     </Stack>

  //     <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
  //       <Link variant="subtitle2" underline="hover">
  //         Forgot password?
  //       </Link>
  //     </Stack>

  //     <LoadingButton
  //       fullWidth
  //       size="large"
  //       type="submit"
  //       variant="contained"
  //       color="inherit"
  //       onClick={handleClick}
  //     >
  //       Login
  //     </LoadingButton>
  //   </>
  // );

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
          All Procucts
        </Typography>

        <Grid container spacing={3}>
          <Grid xs={12} sm={6} md={4} onClick={() => buyProduct(1000)}>
            <AppWidgetSummary
              title="Product duration:  28 days"
              total="1000"
              color="success"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} onClick={() => buyProduct(2000)}>
            <AppWidgetSummary
              title="Product duration:  28 days"
              total="2000"
              color="success"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4} onClick={() => buyProduct(5000)}>
            <AppWidgetSummary
              title="Product duration:  28 days"
              total="5000"
              color="success"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            />
          </Grid>



        </Grid>
      </Container>
    </Box >
  );
}
