/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { Link } from 'react-router-dom';
/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import { MdOutlineInstallMobile } from "react-icons/md";
import { FaKey, FaEdit, FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

import { BaseUrl } from 'src/Base_url';

function UserProfile() {

    const [userData, setUserData] = useState();

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
        };

        axios.get(`${BaseUrl}user/profile`, { withCredentials: true, headers })
            .then(response => {
                setUserData(response.data);

            })
            .catch(error => {
                // Handle error
                console.error('Error fetching user details:', error);
            });
    }, []);

    console.log(userData);
    return (
        <div>
            <div className="container">
                <div className="main-body">
                    <nav aria-label="breadcrumb" className="main-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/Profile">User</Link></li>
                        </ol>
                    </nav>
                    <div className="row gutters-sm ">
                        <div className="col-md-4 mb-3">
                            <div className="card">
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
                            <div className="card mt-3">

                                <ul className="list-group list-group-flush" style={{ listStyle: "none" }}>

                                    <li className="pt-3" >
                                        <Link to="/changePassword">
                                            <FaKey className='pt-1 ms-3' />
                                            <span className="ms-4" style={{ textDecoration: 'none' }}>Change Password</span>
                                        </Link>
                                    </li>

                                    <hr />

                                    <li>
                                        <Link to="/">
                                            <MdOutlineInstallMobile className='mt-1 ms-3' />
                                            <span className="ms-4" style={{ textDecoration: 'none' }}>Install Software</span>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li>
                                        <Link to="/depositHistory">
                                            <FaArrowCircleDown className='mt-1 ms-3' />
                                            <span className="ms-4" style={{ textDecoration: 'none' }}>Withdraw History</span>
                                        </Link>
                                    </li>
                                    <hr />
                                    <li className='pb-3'>
                                        <Link to="/depositHistory">
                                            <FaArrowCircleUp className='mt-1 ms-3' />
                                            <span className="ms-4" style={{ textDecoration: 'none' }}>Deposit History</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">

                            <div className="card mb-3">
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
                                    {/* <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            (320) 380-4539
                                        </div>
                                    </div> */}
                                    {/* <hr /> */}
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
                                    {/* <hr /> */}
                                    {/* <div className="row">
                                        <div className="col-sm-12">
                                            <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <Link to="/updateProfile" state={{ user: userData?.data }}><button className='btn btn-primary px-3 float-end '><FaEdit /></button></Link>


                            {/* <div className="row gutters-sm"> */}
                            {/* <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                            <small>Web Design</small>
                                            <div className="progress mb-3" style={{ height: " 5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" />
                                            </div>
                                            <small>Website Markup</small>
                                            <div className="progress mb-3" style={{ height: " 5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "72%" }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" />
                                            </div>
                                            <small>One Page</small>
                                            <div className="progress mb-3" style={{ height: " 5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "89%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" />
                                            </div>
                                            <small>Mobile Template</small>
                                            <div className="progress mb-3" style={{ height: " 5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" />
                                            </div>
                                            <small>Backend API</small>
                                            <div className="progress mb-3" style={{ height: " 5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "66%" }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            {/* <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                            <small>Web Design</small>
                                            <div className="progress mb-3" style={{ height: " 5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" />
                                            </div>
                                            <small>Website Markup</small>
                                            <div className="progress mb-3" style={{ height: " 5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "72%" }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" />
                                            </div>
                                            <small>One Page</small>
                                            <div className="progress mb-3" style={{ height: " 5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "89%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" />
                                            </div>
                                            <small>Mobile Template</small>
                                            <div className="progress mb-3" style={{ height: " 5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" />
                                            </div>
                                            <small>Backend API</small>
                                            <div className="progress mb-3" style={{ height: " 5px" }}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "66%" }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            {/* </div> */}



                        </div>

                    </div>


                </div>
            </div>
        </div>

    )
}

export default UserProfile
