/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { alpha, useTheme } from '@mui/material/styles';

import { BaseUrl } from 'src/Base_url';
import { bgGradient } from 'src/theme/css';

import "../../pages/style.css"
// eslint-disable-next-line perfectionist/sort-imports
import "../../pages/slider.css"
import AppWidgetSummary from '../overview/app-widget-summary';



// ----------------------------------------------------------------------

export default function HomeView() {
  const [wallet, setWallet] = useState({})

  const theme = useTheme();
  const navigate = useNavigate();

  const handleInviteFriend = () => {
    Swal.fire({
      title: "Invite Friends",
      html: `
      <div style="display:flex;gap:20px;justify-content:center;padding:30px">
        <a href="https://facebook.com" target="_blank">
          <image src="/assets/icons/Facebook_icon.png" style="height:50px" >
        </a>
        
        <a href="https://instagram.com" target="_blank">
          <image src="/assets/icons/Instagram_icon.png" style="height:50px">  
        </a>

        <a href="https://twitter.com" target="_blank">  
          <image src="/assets/icons/Twitter X Icon.svg" style="height:50px">
        </a>
      </div>`,
    })
  }


  const getWallet = async () => {
    try {
      const { data } = await axios.get(`${BaseUrl}getuserWallet`, { headers: { 'Authorization': Cookies.get("token") } })
      setWallet(data.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getWallet()
  }, [])


  const widgetContainerStyle = {
    fontSize: 'inherit', // Set the default font size

    '@media (max-width: 500px) and (min-width: 300px)': {
      fontSize: '10px', // Set the font size to 10px for screens between 300px and 500px
      // Add any other styles as needed
    },
  };
  const buttonStyle = {
    fontSize: '16px', // Default font size
    '@media (min-width: 300px) and (max-width: 500px)': {
      fontSize: '10px', // Font size for screen size between 300px and 500px
    },
  };
  const [userData, setUserData] = useState();
  // const [accountData, setAccountData] = useState()

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': Cookies.get("token")
    };

    axios.get(`${BaseUrl}user/profile`, { headers })
      .then(response => {
        setUserData(response.data);

      })
      .catch(error => {
        // Handle error
        console.error('Error fetching user details:', error);
      });


    // axios.get(`${BaseUrl}getAccount`, { headers })
    //   .then(response => {
    //     setAccountData(response.data.data[0]);
    //     console.log(response.data);


    //   })
    //   .catch(error => {
    //     // Handle error
    //     console.error('Error fetching user details:', error);
    //   });


  }, []);

  return (
    <div>
      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.5),
            imgUrl: '/assets/background/overlay_4.jpg',
          }),
          height: 1,
        }}
      >
        <div className="container pt-5 text-center">
          <div className="row">
            <div className="col-12 mb-5 ">
              {/* <div className="img-mask mask-2  mt-5"> */}
              <img className='rounded-pill' style={{ height: "150px" }} src='\assets\images\Images\Profile-Avatar-PNG.png' alt="" />
              <h2>
                {userData?.data?.name ? userData.data.name.charAt(0).toUpperCase() + userData.data.name.slice(1) : ''}

              </h2>
              {/* </div> */}
              {/* <marquee> <h5 className='font-weight-bold'>Daily get 300% return of your investment with in 24 hours & being a part of our dolphin's family</h5></marquee>
              <p className='text-secondary fw-lighter mb-0'>Our next setup will be organise on 11th january in Indonesia.</p>
              <p className='text-secondary'>Lucky members are daily awarded with extra additional bonus.</p>

              <h5 className='font-weight-bold'>Members of singapure doing well</h5>
              <p className='text-secondary fw-lighter '>All the members of our family from singapure getting 400% return of there investment.</p> */}
            </div>
          </div>
        </div>

        <Container>

          <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} alignItems="start">
            <Grid xs={6} sm={6} md={3} style={widgetContainerStyle} >
              <AppWidgetSummary
                sx={buttonStyle}
                title="Wallet"
                total={wallet?.amount || 0}
                color="success"
                icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
              />
            </Grid>
            <Grid xs={6} sm={6} md={2} >
              <Button variant='outlined' color='primary' fullWidth onClick={() => navigate("/depositHistory")}>Deposit history</Button>
              <Button variant='outlined' color='primary' fullWidth className='my-1' onClick={() => navigate("/withdrawalHistory")}>Withdawals history</Button>
              <Button variant='outlined' color='primary' fullWidth onClick={() => navigate("/WithdrawalAmount")}>Create withdrawal request</Button>
            </Grid>

            {/* <Grid xs={12} sm={6} md={2} onClick={() => navigate("/depositHistory")}>
              <AppWidgetSummary
                title="Deposit history"
                color="success"
                icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
              />
            </Grid>
            <Grid xs={12} sm={6} md={2} onClick={() => navigate("/withdrawalHistory")}>
              <AppWidgetSummary
                title="Withdawals history"
                color="success"
                icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
              />
            </Grid>
            <Grid xs={12} sm={6} md={2} onClick={() => navigate("/WithdrawalAmount")}>
              <AppWidgetSummary
                title="Create withdrawal request"
                color="success"
                icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
              />
            </Grid> */}
            {/* <Grid xs={12} sm={6} md={2}>
              <Link to='/WithdrawalAmount' style={{ textDecoration: "none", color: "black" }}>
                <div className='w-100 h-100 bg-light rounded-4 '>
                  <br />
                  <img alt="icon" className='ms-3 ' width={60} src="/assets/icons/glass/ic_glass_bag.png" />
                  <b className=' ms-2'>withdrawal</b>
                </div>
              </Link>
            </Grid> */}
          </Grid>


          <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>

            <Grid xs={6} sm={6} md={6}
            >
              <Link to='/membershipProducts'>
                <AppWidgetSummary
                  title="Let's take a look at all products."
                  total="Membership Plans"
                  color="success"
                  icon={<img alt="icon" src="/assets/Homeicon/a.png" />}
                />
              </Link>
            </Grid>

            <Grid xs={6} sm={6} md={6} onClick={handleInviteFriend}

            >

              {/* <Link to="/myMemberships"> */}
              <AppWidgetSummary
                title="Refer your friend and earn a lot"
                total="Refer a Friend"
                color="info"
                icon={<img alt="icon" src="/assets/Homeicon/b.png" />}
              />
              {/* </Link> */}

            </Grid>

            <Grid xs={6} sm={6} md={6}

            >

              <a href="https://telegram.com" target='_blank' rel="noreferrer">

                <AppWidgetSummary
                  title="Invite your friends to join with us"
                  total="Customer support"
                  color="warning"
                  icon={<img alt="icon" src="/assets/Homeicon/d.png" />}
                />

              </a>
            </Grid>

            <Grid xs={6} sm={6} md={6}

            >
              <Link to="/myMemberships">
                <AppWidgetSummary
                  title="Let's see your all membersips that you have purchased"
                  total="My Memberships"
                  color="error"
                  icon={<img alt="icon" src="/assets/Homeicon/c.png" />}
                />
              </Link>

            </Grid>

          </Grid>
        </Container>
      </Box >
    </div >
  );
}
