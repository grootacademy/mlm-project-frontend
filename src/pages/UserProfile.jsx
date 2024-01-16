/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import Cookies from 'js-cookie';
// import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
// import { MdOutlineInstallMobile } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';

// eslint-disable-next-line import/no-cycle
// import Router from 'src/routes/sections';
// import { RouterLink } from 'src/routes/components';

import { BaseUrl } from 'src/Base_url';

import "./style.css"

function UserProfile() {



    const [userData, setUserData] = useState();
    const [accountData, setAccountData] = useState()
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


        axios.get(`${BaseUrl}getAccount`, { headers })
            .then(response => {
                setAccountData(response.data.data[0]);
                console.log(response.data);


            })
            .catch(error => {
                // Handle error
                console.error('Error fetching user details:', error);
            });


    }, []);




    return (
        <div>
            <div className="container">
                <div className="main-body mt-1">
                    <nav aria-label="breadcrumb" className="main-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/Profile">User</Link></li>
                        </ol>
                    </nav>
                    <div className="row gutters-sm ">
                        <div className="col-md-4 mb-3">

                            <div className="card mt-3">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>{userData?.data?.name}</h4>

                                            <p className="text-muted font-size-sm">{userData?.data?._id}</p>
                                            {/* <button className="btn btn-primary">Follow</button> */}
                                            {/* <button className="btn btn-outline-primary">Message</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card mt-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0"> Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {userData?.data?.name}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {userData?.data?.email}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">User Id</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {userData?.data?._id}
                                        </div>
                                    </div>
                                    <hr />

                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile Number</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            +91-
                                            {userData?.data?.phone
                                            }
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Total Memberships</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {userData?.data?.totalMemberships
                                            }
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">UPI Id</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {userData?.data?.upiId || "-"}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Registered on</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {

                                                new Date(userData?.data?.createdAt).toLocaleString()
                                            }
                                        </div>
                                    </div>
                                    <Link to="/updateProfile" state={{ user: userData?.data }}><button className='btn btn-primary px-3 float-end '><FaEdit /></button></Link>

                                    {/* <hr /> */}
                                    {/* <div className="row">
                                        <div className="col-sm-12">
                                            <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>


                            {/* <div className="row gutters-sm">
                                <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                            <small>Web Design</small>
                                            <div className="progress mb-3" style={{ height: " 5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" />
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                            <small>Web Design</small>
                                            <div className="progress mb-3" style={{ height: " 5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}



                        </div>

                        <div className="col-md-4">
                            <h5 className='text-center'>Bank Account Details</h5>

                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"> Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {accountData?.name}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">

                                                <h6 className="mb-0">AccountNumber</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {accountData?.accountNumber}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">ifsc Code</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {accountData?.ifscCode}
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">bankName</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">

                                                {accountData?.bankName
                                                }
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">branch</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {accountData?.branch
                                                }
                                            </div>
                                        </div>
                                        <hr />


                                        {/* <Link to="/updateProfile" state={{ user: userData?.data }}><button className='btn btn-primary px-3 float-end '><FaEdit /></button></Link> */}

                                        {/* <hr /> */}
                                        {/* <div className="row">
                                        <div className="col-sm-12">
                                            <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                        </div>
                                    </div> */}
                                    </div>






                                    {
                                        accountData &&
                                        <Link to="/updateBankDetails" state={{ user: accountData }}><button className='btn btn-primary px-3 float-start '><FaEdit /></button></Link>
                                    }
                                    {
                                        !accountData &&
                                        <Link to="/bankDetails" ><button className='btn btn-primary px-3 float-end '>Add Bank Details</button></Link>
                                    }


                                    {/* <hr /> */}
                                    {/* <div className="row">
                                        <div className="col-sm-12">
                                            <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>


                            {/* <div className="row gutters-sm">
                                <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                            <small>Web Design</small>
                                            <div className="progress mb-3" style={{ height: " 5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" />
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                            <small>Web Design</small>
                                            <div className="progress mb-3" style={{ height: " 5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}



                        </div>

                    </div>



                    {/* <div className='signupBox d-flex justify-content-center flex-wrap align-items-center ' >
                        <form className='signusform' >
                            <div className='row'>
                                <h3 className='text-center'>Bank Details</h3>

                                <div className='col-md-12 col-sm-12 col-xs-12  text-start'>
                                    <div >
                                        <Label htmlFor="name" className="form-label">Account Holder Name</Label>

                                        <input type="text" name='name' onChange={handleChange} className=" form-control logininput" placeholder="Name" id="name" aria-describedby="emailHelp" />
                                    </div>

                                    <div >
                                        <Label htmlFor="accountNumber" className="form-label">AccountNumber</Label>
                                        <input type="number" name='accountNumber' onChange={handleChange} className=" form-control logininput" placeholder="accountNumber" id="accountNumber" />
                                    </div>

                                    <div >
                                        <Label htmlFor="ifscCode" className="form-label">IFSC Code</Label>
                                        <input type="text" name='ifscCode' onChange={handleChange} className=" form-control logininput" placeholder="ifscCode" id="ifscCode" />
                                    </div>

                                    <div >
                                        <Label htmlFor="bankName" className="form-label">BankName</Label>

                                        <input type='bankName' name="bankName" label="bankName." onChange={handleChange} className=" form-control logininput" placeholder="bankName" id="bankName" aria-describedby="bankName" />
                                    </div>

                                    <div >
                                        <Label htmlFor="branch" className="form-label">branch</Label>
                                        <input type="branch" onChange={handleChange} name='branch' placeholder="branch" className="w-100 form-control  logininput" id="branch" />
                                    </div>


                                </div>



                                <center>
                                    <button type="submit" onClick={handleClick} className="loginbtn mt-3 w-100 btn text-light "> Add Bank Details</button>
                                </center>
                            </div>

                        </form>
                    </div> */}




                </div>

            </div>


        </div>


    )
}

export default UserProfile
