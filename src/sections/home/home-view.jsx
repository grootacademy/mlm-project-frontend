
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import AppWidgetSummary from '../overview/app-widget-summary';

// ----------------------------------------------------------------------

export default function HomeView() {
  const theme = useTheme();

  const handleInviteFriend = () => {
    console.log("first")
    Swal.fire({
      title: "Invite Friends",
      html: `
      <div style="display:flex;gap:20px;justify-content:center;padding:30px">
        <a href="https://facebook.com" target="_blank">
          <image src="../../../public/assets/icons/Facebook_icon.png" height="50px" >
        </a>
        
        <a href="https://instagram.com" target="_blank">
          <image src="../../../public/assets/icons/Instagram_icon.png" height="50px" >  
        </a>

        <a href="https://twitter.com" target="_blank">  
          <image src="../../../public/assets/icons/Twitter X Icon.svg" height="50px" >
        </a>
      </div>`,
    })
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
        <Typography paddingTop="50px" variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back 👋
        </Typography>

        <Grid container spacing={3}>
          <Grid xs={12} sm={6} md={2}>
            <AppWidgetSummary
              title="Wallet"
              total={1000}
              color="success"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid xs={12} sm={6} md={6}>
            <Link to='/membershipProducts'>
              <AppWidgetSummary
                title="Let's take a look at all products."
                total="All Products"
                color="success"
                icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
              />
            </Link>
          </Grid>

          <Grid xs={12} sm={6} md={6}>

            <Link to="/myMemberships">
              <AppWidgetSummary
                title="Refer your friend and earn a lot"
                total="Refer a Friend"
                color="info"
                icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
              />
            </Link>

          </Grid>

          <Grid xs={12} sm={6} md={6} onClick={handleInviteFriend}>

            <AppWidgetSummary
              title="Invite your friends to join with us"
              total="Invite Friend"
              color="warning"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
            />

          </Grid>

          <Grid xs={12} sm={6} md={6}>
            <Link to="/myMemberships">
              <AppWidgetSummary
                title="Let's see your all membersips that you have purchased"
                total="My Memberships"
                color="error"
                icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
              />
            </Link>
          </Grid>

        </Grid>
      </Container>
    </Box >
  );
}
