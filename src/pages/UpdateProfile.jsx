/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react'

import { useRouter } from 'src/routes/hooks';

import { BaseUrl } from 'src/Base_url';

import './style.css'

const UpdateProfile = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        upiId: ''
    });

    const router = useRouter()

    const location = useLocation()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleClick = async (e) => {

        e.preventDefault();

        // Perform registration logic here (e.g., send data to the server)
        try {

            await axios.put(`${BaseUrl}user/update`, formData, { withCredentials: true });

            // Handle successful signup
            toast.success('Updated successfully')
            router.push('/profile');

        } catch (error) {
            // Handle signup failure
            toast.error(error?.response?.data?.message || error.message)
        }
        // }
    };

    useEffect(() => {
        if (location.state?.user) {
            setFormData(location.state?.user);
        }
    }, [])

    return <center>

        <div>
            <div >
                <h5 className='text-center register mt-5'>Login Now</h5>
                <div className='signupBox d-flex justify-content-center flex-wrap align-items-center ' >
                    <form className='signusform' >
                        <div className='row'>

                            <div className='col-md-12 col-sm-12 col-xs-12  text-start'>
                                <div >
                                    <label htmlFor="name" className="form-label">name*</label>
                                    <input type="name" value={formData.name} name='name' onChange={handleChange} className=" form-control logininput" placeholder="name" id="name" aria-describedby="nameHelp" />
                                </div>

                                <div >
                                    <label htmlFor="email" className="form-label">email*</label>
                                    <input type="email" value={formData.email} name='email' onChange={handleChange} className=" form-control logininput" placeholder="Email" id="email" aria-describedby="emailHelp" />
                                </div>

                                <div >
                                    <label htmlFor="mobile" className="form-label">mobile*</label>
                                    <input type="tel" value={formData.phone} name='phone' onChange={handleChange} className=" form-control logininput" placeholder="mobile" id="mobile" aria-describedby="mobileHelp" />
                                </div>
                                <div >
                                    <label htmlFor="upiid" className="form-label">upiid*</label>
                                    <input type="text" value={formData.upiId} name='upiId' onChange={handleChange} className=" form-control logininput" placeholder="upiid" id="upiid" aria-describedby="upiidHelp" />
                                </div>


                            </div>




                            <center>
                                <button type="submit" onClick={handleClick} className="loginbtn text-white  mt-3 w-100 btn ">Update</button>
                            </center>
                        </div>

                    </form>
                </div>
            </div >
        </div>
    </center>
}

export default UpdateProfile
