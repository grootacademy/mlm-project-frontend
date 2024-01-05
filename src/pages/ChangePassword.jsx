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
import axios from 'axios';
import { BaseUrl } from 'src/Base_url';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleOldPasswordChange = (e) => setOldPassword(e.target.value);
    const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleChangePassword = async (e) => {
        e.preventDefault()
        try {
            // Basic client-side validation
            if (newPassword !== confirmPassword) {
                toast.error("New passwords don't match")

                return;
            }
            console.log("oldPassword", oldPassword)
            console.log("newPassword", newPassword)
            // eslint-disable-next-line prefer-const
            let formData = {
                currentPassword: oldPassword,
                newPassword
            }
            console.log("object:::::", formData)
            const { data } = await axios.put(`${BaseUrl}password/reset`, formData, { withCredentials: true }, {
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers if needed
                },
            });

            // Cookies.set("token", data.token)

            toast.success("password has been  changed successfully")


        } catch (error) {
            setErrorMessage(error.response.data.error || 'An error occurred.');

            toast.error(error.message)
        }
        console.log(oldPassword);
        console.log(newPassword);
        console.log(confirmPassword);



    };

    return (
        <div>
            <center>
                <h5 className='text-center register mt-5'>Change Password</h5>
                {/* {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>} */}
                {/* {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>} */}

                <div className='signupBox d-flex justify-content-center flex-wrap align-items-center ' >
                    <form className='signusform' >
                        <div className='row'>

                            <div className='col-md-12 col-sm-12 col-xs-12  text-start'>
                                <div >
                                    <label htmlFor="oldPassword" className="form-label">Old Password*</label>
                                    <input type="password" name='oldPassword' onChange={handleOldPasswordChange} placeholder="old password" className="w-100 form-control  logininput" id="oldPassword" />
                                </div>
                                <div >
                                    <label htmlFor="password" className="form-label">Password*</label>
                                    <input type="password" name='password' onChange={handleNewPasswordChange} className=" form-control logininput" placeholder="password" id="email" aria-describedby="emailHelp" />
                                </div>

                                <div >
                                    <label htmlFor="confirmpassword" className="form-label">Confirm Password*</label>
                                    <input type="password" name='confirmpassword' onChange={handleConfirmPasswordChange} placeholder="confirm password" className="w-100 form-control  logininput" id="confirmpassword" />
                                </div>
                            </div>
                            <center>
                                <button type="submit" onClick={handleChangePassword} className="loginbtn mt-3 w-100 btn text-light ">Reset</button>
                            </center>
                        </div>

                    </form>
                </div>
            </center >
        </div >
    )
}

export default ChangePassword
