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
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import LoadingButton from '@mui/lab/LoadingButton';
// import InputAdornment from '@mui/material/InputAdornment';

import toast from 'react-hot-toast';

import { useRouter } from 'src/routes/hooks';

import { BaseUrl } from 'src/Base_url';

// import Logo from 'src/components/logo';
import Label from 'src/components/label';

// eslint-disable-next-line perfectionist/sort-imports

// ----------------------------------------------------------------------

export default function LoginView() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const router = useRouter();


  const handleClick = async (e) => {
    e.preventDefault()

    try {
      const { data } = await axios.post(`${BaseUrl}login`, formData, {
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
      });

      Cookies.set("token", data.token)
      Cookies.set("role", data.user.role)

      if (data.user.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/');
      }

      // Store the token in your app's state or local storage for further use
    } catch (err) {

      if (err.response?.data?.errors?.length > 0) {
        err.response.data.errors.forEach(k => {
          toast.error(k.msg)
        })
      } else {
        toast.error(err?.response?.data?.message)
      }

      // Handle login error, e.g., display an error message to the user
    }


  };

  const renderForm = (
    <>
      <div >
        <h5 className='text-center register mt-5'>Login Now</h5>
        <div className='signupBox d-flex justify-content-center flex-wrap align-items-center ' >
          <form className='signusform' >
            <div className='row'>

              <div className='col-md-12 col-sm-12 col-xs-12  text-start'>
                <div >
                  <Label htmlFor="email" className="form-label">email*</Label>
                  <input type="email" name='email' onChange={handleChange} className=" form-control logininput" placeholder="Email" id="email" aria-describedby="emailHelp" />
                </div>

                <div >
                  <Label htmlFor="password" className="form-label">Password*</Label>
                  <input type="password" name='password' onChange={handleChange} placeholder="Password" className="w-100 form-control  logininput" id="password" />
                </div>

              </div>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Don’t have an account?
                <RouterLink to='/register'>
                  <Link style={{ color: "#2d0381", cursor: "pointer" }} variant="subtitle2" sx={{ ml: 0.5 }}>
                    Get started
                  </Link>
                </RouterLink>
              </Typography>
              {/* <Link className='text-end forgotbtn fw-normal  ' to='/Forgot' ><RouterLink to='/register'>
                <Link variant="subtitle2" sx={{ ml: 0.5 }} style={{ color: "#2d0381", cursor: "pointer" }}>
                  Forgotten Password ?
                </Link>
              </RouterLink> </Link> */}


              <center>
                <button type="submit" onClick={handleClick} className="loginbtn mt-3 w-100 btn ">Login</button>
              </center>
            </div>

          </form>
        </div>
      </div >




      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          {/* Forgot password? */}
        </Link>
      </Stack>


    </>
  );

  return (
    <Box >
      <Stack alignItems="center" width="1000" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 3,
          }}
        >
          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
