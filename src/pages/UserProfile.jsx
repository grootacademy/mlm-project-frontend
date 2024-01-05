/* eslint-disable react/button-has-type */
import React from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaKey } from "react-icons/fa";

function UserProfile() {
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

                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>John Doe</h4>
                                            <p className="text-secondary mb-1">Full Stack Developer</p>
                                            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                            <button className="btn btn-primary">Follow</button>
                                            <button className="btn btn-outline-primary">Message</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex" >
                                        {/* <h6 className="mb-0"><KeyIcon/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6> */}
                                        <Link to="/changePassword">
                                            <FaKey className='mt-1' />
                                            <span className="ms-4" style={{ textDecoration: 'none' }}>Change Password</span>
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
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            Kenneth Valdez
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            fip@jukmuh.al
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            (239) 816-9029
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            (320) 380-4539
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            Bay Area, San Francisco, CA
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row gutters-sm">
                                <div className="col-sm-6 mb-3">
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
                                </div>
                                <div className="col-sm-6 mb-3">
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
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserProfile
