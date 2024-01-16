import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import toast from 'react-hot-toast';
// import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import LoadingButton from '@mui/lab/LoadingButton';
// import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { BaseUrl } from 'src/Base_url';
// import { bgGradient } from 'src/theme/css';

// import Logo from 'src/components/logo';
// import Iconify from 'src/components/iconify';
import Label from 'src/components/label';

import "./registerstyle.css"
// ----------------------------------------------------------------------

export default function RegisterView() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    upiId: '',
    password: '',
    confirmPassword: '',
  });

  // const [errors, setErrors] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // });

  const router = useRouter();

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
    console.log(formData);
    try {

      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match")
        return
      }

      await axios.post(`${BaseUrl}register`, formData, {
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
      });

      // Handle successful signup
      toast.success('Registration successful')
      router.push('/login');

    } catch (error) {
      // Handle signup failure
      toast.error(error?.response?.data?.message || error.message)
      console.log('Signup failed', error);
    }
    // }
  };

  const renderForm = (
    <div >
      <h5 className='text-center register'>Register Now</h5>
      <div className='signupBox d-flex justify-content-center flex-wrap align-items-center ' >
        <form className='signusform' >
          <div className='row'>

            <div className='col-md-12 col-sm-12 col-xs-12  text-start'>
              <div >
                <Label htmlFor="name" className="form-label">Name*</Label>

                <input type="text" name='name' onChange={handleChange} className=" form-control logininput" placeholder="Name" id="name" aria-describedby="emailHelp" />
              </div>

              <div >
                <Label htmlFor="phone" className="form-label">Phone*</Label>
                <input type="number" name='phone' onChange={handleChange} className=" form-control logininput" placeholder="Phone" id="phone" />
              </div>

              <div >
                <Label htmlFor="upiId" className="form-label">Upi Id*</Label>
                <input type="text" name='upiId' onChange={handleChange} className=" form-control logininput" placeholder="Upi Id" id="upiId" />
              </div>

              <div >
                <Label htmlFor="email" className="form-label">Email*</Label>

                <input type='email' name="email" label="email." onChange={handleChange} className=" form-control logininput" placeholder="email" id="email" aria-describedby="email" />
              </div>

              <div >
                <Label htmlFor="password" className="form-label">Password*</Label>
                <input type="password" onChange={handleChange} name='password' placeholder="Password" className="w-100 form-control  logininput" id="password" />
              </div>
              <div >
                <Label htmlFor="confirmPassword" className="form-label">  confirmPassword*</Label>
                <input type="Password" name='confirmPassword' onChange={handleChange} placeholder="confirmPassword" className="w-100 form-control  logininput" id="confirmPassword" />
              </div>

            </div>
            <RouterLink to="/login" style={{ color: "#2d0381", cursor: "pointer" }} variant="subtitle2" sx={{ ml: 0.5 }}>
              Already have an account?
            </RouterLink>
            {/* <Link className='text-end forgotbtn fw-normal  ' to='/Forgot' ><RouterLink to='/register'>
              <Link variant="subtitle2" sx={{ ml: 0.5 }} style={{ color: "#2d0381", cursor: "pointer" }}>
                Forgotten Password ?
              </Link>
            </RouterLink> </Link> */}


            <center>
              <button type="submit" onClick={handleClick} className="loginbtn mt-3 w-100 btn ">Register</button>
            </center>
          </div>

        </form>
      </div>
    </div >
  );

  return (
    <Box
      sx={{
        overflow: "visible"
      }}
    >
      <Stack alignItems="center" justifyContent="center" >
        <Card
          sx={{
            p: 5,
            width: 1,
            // maxWidth: 420,
          }}

        >
          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}