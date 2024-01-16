/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';
/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
// import { MdOutlineInstallMobile } from "react-icons/md";
// import { FaKey, FaEdit, FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

// eslint-disable-next-line import/no-cycle
// import Router from 'src/routes/sections';
// import { RouterLink } from 'src/routes/components';

import { useLocation } from 'react-router-dom';

import { useRouter } from 'src/routes/hooks';

import { BaseUrl } from 'src/Base_url';

import "./style.css"

function UpdateBankDetails() {
    const [formData, setFormData] = useState({
        name: '',
        accountNumber: '',
        ifscCode: '',
        bankName: '',
        branch: '',

    });



    const router = useRouter()

    const location = useLocation()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    }
    console.log(formData);


    const handleClick = async (e) => {


        e.preventDefault();

        // Perform registration logic here (e.g., send data to the server)
        try {

            await axios.put(`${BaseUrl}account/update/${formData._id}`, formData, { headers: { 'Authorization': Cookies.get("token") } });

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>

            <div className="container w-75 rounded bg-white mt-5 mb-5">
                <div className="row">

                    <div className="col-md-12 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-center align-items-center mb-3">
                                <h4 className=" text-center">Bank Details</h4>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">Account Holder Name</label><input type="text" onChange={handleChange} className="form-control" placeholder="Account Holder Name" value={formData.name} name="name" /></div>
                                <div className="col-md-12"><label className="labels">Account Number</label><input type="number" onChange={handleChange} className="form-control" placeholder="AccountNumber" value={formData.accountNumber} name="accountNumber" /></div>
                                <div className="col-md-12"><label className="labels">IFSC Code</label><input type="text" onChange={handleChange} className="form-control" placeholder="IFSC Code" value={formData.ifscCode} name="ifscCode" /></div>
                                <div className="col-md-12"><label className="labels">BankName</label><input type="text" onChange={handleChange} className="form-control" placeholder="BankName" value={formData.bankName} name="bankName" /></div>
                                <div className="col-md-12"><label className="labels">Branch</label><input type="text" onChange={handleChange} className="form-control" placeholder="Branch" value={formData.branch} name="branch" /></div>
                            </div>

                            <div className="mt-2 text-center"><button className="w-100 btn btn-primary profile-button" onClick={handleClick} type="button">Update Details</button></div>
                        </div>
                    </div>

                </div>
            </div>


        </div>


    )
}

export default UpdateBankDetails
