import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from 'js-cookie';
import { useState } from 'react';
// import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { BaseUrl } from 'src/Base_url';
import { bgGradient } from 'src/theme/css';

// import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';


// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async () => {

    try {
      const { data } = await axios.post(`${BaseUrl}login`, formData, {
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
      });

      Cookies.set("token", data.token)

      if (data.user.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/');
      }

      // Store the token in your app's state or local storage for further use
    } catch (error) {

      alert('Login Error:', error.message)

      // Handle login error, e.g., display an error message to the user
    }


  };

  const renderForm = (
    <>

      <Stack spacing={3}>
        <TextField name="email" onChange={handleChange} label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          {/* Forgot password? */}
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        Login
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.5),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      {/* <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      /> */}

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Sign in to website</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <RouterLink to='/register'>
              <Link variant="subtitle2" sx={{ ml: 0.5 }}>
                Get started
              </Link>
            </RouterLink>
          </Typography>

          {/* <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:facebook-fill" color="#1877F2" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
            </Button>
          </Stack> */}

          {/* <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider> */}

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
