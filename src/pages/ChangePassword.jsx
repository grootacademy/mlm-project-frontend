/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaKey } from "react-icons/fa";
// eslint-disable-next-line perfectionist/sort-imports
import { RouterLink } from 'src/routes/components';
// eslint-disable-next-line perfectionist/sort-imports
import { Typography } from '@mui/material';
// eslint-disable-next-line perfectionist/sort-imports
import "./style.css"

function ChangePassword() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <center>
                <h5 className='text-center register mt-5'>Change Password</h5>
                <div className='signupBox d-flex justify-content-center flex-wrap align-items-center ' >
                    <form className='signusform' >
                        <div className='row'>

                            <div className='col-md-12 col-sm-12 col-xs-12  text-start'>
                                <div >
                                    <label htmlFor="oldPassword" className="form-label">Old Password*</label>
                                    <input type="password" name='oldPassword' onChange={handleChange} placeholder="old password" className="w-100 form-control  logininput" id="oldPassword" />
                                </div>
                                <div >
                                    <label htmlFor="password" className="form-label">Password*</label>
                                    <input type="password" name='password' onChange={handleChange} className=" form-control logininput" placeholder="password" id="email" aria-describedby="emailHelp" />
                                </div>

                                <div >
                                    <label htmlFor="confirmpassword" className="form-label">Confirm Password*</label>
                                    <input type="password" name='confirmpassword' onChange={handleChange} placeholder="confirm password" className="w-100 form-control  logininput" id="confirmpassword" />
                                </div>
                            </div>
                            <center>
                                <button type="submit" className="loginbtn mt-3 w-100 btn ">Login</button>
                            </center>
                        </div>

                    </form>
                </div>
            </center >
        </div >
    )
}

export default ChangePassword
