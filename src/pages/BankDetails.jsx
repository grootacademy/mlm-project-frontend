/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';
/* eslint-disable react/button-has-type */
import { useState } from 'react';
// import { MdOutlineInstallMobile } from "react-icons/md";
// import { FaKey, FaEdit, FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

// eslint-disable-next-line import/no-cycle
// import Router from 'src/routes/sections';
// import { RouterLink } from 'src/routes/components';

import { BaseUrl } from 'src/Base_url';

import "./style.css"

function BankDetails() {
    const [formData, setFormData] = useState({
        name: '',
        accountNumber: '',
        ifscCode: '',
        bankName: '',
        branch: '',

    });




    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    }
    console.log(formData);


    const handleClick = async (e) => {

        e.preventDefault();
        console.log(formData);
        try {

            await axios.post(`${BaseUrl}create/accountDetails`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': Cookies.get("token")

                },
            });

            toast.success('Bank Detail Added successfully')

        } catch (error) {
            // Handle signup failure
            console.log(error.response);
            toast.error(error?.response?.data?.message || error.message)
            console.log('Details failed', error);
        }
        // }
    };



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
                                <div className="col-md-12"><label className="labels">Account Holder Name</label><input type="text" onChange={handleChange} className="form-control" placeholder="Account Holder Name" name="name" /></div>
                                <div className="col-md-12"><label className="labels">Account Number</label><input type="number" onChange={handleChange} className="form-control" placeholder="AccountNumber" name="accountNumber" /></div>
                                <div className="col-md-12"><label className="labels">IFSC Code</label><input type="text" onChange={handleChange} className="form-control" placeholder="IFSC Code" name="ifscCode" /></div>
                                <div className="col-md-12"><label className="labels">BankName</label><input type="text" onChange={handleChange} className="form-control" placeholder="BankName" name="bankName" /></div>
                                <div className="col-md-12"><label className="labels">Branch</label><input type="text" onChange={handleChange} className="form-control" placeholder="Branch" name="branch" /></div>
                            </div>

                            <div className="mt-2 text-center"><button className="w-100 btn btn-primary profile-button" onClick={handleClick} type="button">Save Details</button></div>
                        </div>
                    </div>

                </div>
            </div>


        </div>


    )
}

export default BankDetails
