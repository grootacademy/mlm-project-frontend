import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import toast from 'react-hot-toast';
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

export default function RegisterView() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  // const [errors, setErrors] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // });



  const theme = useTheme();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // setErrors((prevErrors) => ({
    //   ...prevErrors,
    //   [e.target.name]: '',
    // }));
  };



  // const validateForm = () => {
  //   let isValid = true;

  //   // Name validation (only letters and spaces)
  //   const nameRegex = /^[a-zA-Z\s]+$/;
  //   if (!nameRegex.test(formData.name)) {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       name: 'Invalid name',
  //     }));
  //     isValid = false;
  //   }

  //   // Email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(formData.email)) {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       email: 'Invalid email address',
  //     }));
  //     isValid = false;
  //   }

  //   // Password validation (at least 8 characters)
  //   if (formData.password.length < 8) {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       password: 'Password must be at least 8 characters',
  //     }));
  //     isValid = false;
  //   }

  //   // Confirm password validation
  //   if (formData.password !== formData.confirmPassword) {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       confirmPassword: 'Passwords do not match',
  //     }));
  //     isValid = false;
  //   }

  //   return isValid;
  // };


  const handleClick = async (e) => {

    e.preventDefault();

    // if (validateForm()) {
    // Perform registration logic here (e.g., send data to the server)

    try {

      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match")
        return
      }

      const { data } = await axios.post(`${BaseUrl}register`, formData, {
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
      });

      // Handle successful signup
      alert('Registration successful', data);
      router.push('/login');

    } catch (error) {
      // Handle signup failure
      toast.error(error?.response?.data?.message || error.message)
      console.log('Signup failed', error);
    }


    // }
  };


  const renderForm = (
    <>
      <Stack spacing={3} style={{ color: "red" }}>
        <TextField name="name" label="Name" onChange={handleChange} />
        {/* <span style={{ color: 'red' }}>{errors.name}</span> */}
        <TextField name="email" label="Email address" onChange={handleChange} />
        <TextField name="phone" type='tel' maxRows={10} label="Phone No." onChange={handleChange} />
        {/* <span style={{ color: 'red' }}>{errors.email}</span> */}

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

        {/* <span style={{ color: 'red' }}>{errors.password}</span> */}
        <TextField
          name="confirmPassword"
          label="Confirm Password"
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
        {/* <span style={{ color: 'red' }}>{errors.confirmPassword}</span> */}

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
        Register
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
        overflow: "auto"
      }}
    >
      {/* <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      /> */}

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1, overflow: "auto" }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
          style={{ overflow: "auto" }}
        >
          <Typography variant="h4">Register to website</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            <RouterLink to='/login'>

              <Link to="/login" variant="subtitle2" sx={{ ml: 0.5 }}>
                Already have an account?
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