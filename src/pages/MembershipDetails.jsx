/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line perfectionist/sort-named-imports
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line perfectionist/sort-imports
import './style.css'
// eslint-disable-next-line perfectionist/sort-imports
import axios from 'axios';
// eslint-disable-next-line perfectionist/sort-imports
import { BaseUrl } from 'src/Base_url';

export default function MembershipDetails() {
    const [membersDtails, setMembersDtails] = useState("")
    const location = useLocation();
    const receivedData = location.state ? location.state.data : null;
    useEffect(() => {
        const fetchMembersDetails = async () => {
            try {
                if (receivedData && receivedData._id) {
                    const response = await axios.get(`${BaseUrl}membership/${receivedData._id}`, { withCredentials: true });
                    setMembersDtails(response.data);
                }
            } catch (error) {
                console.error('Error fetching membership details:', error);
            }
        };
        fetchMembersDetails();
    }, [receivedData]);
    return (
        <div className="container bootstrap snippets bootdey mt-4">
            <nav aria-label="breadcrumb" className="main-breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/myMemberships">My Memberships</Link></li>
                    <li className="breadcrumb-item"><Link to="/Profile">Membership Details</Link></li>
                </ol>
            </nav>
            <div className="row ng-scope">
                <div className="col-md-4 ">
                    <div className="panel panel-default p-4">
                        <div className="panel-body text-center">
                            <div className="pv-lg"><img className="center-block img-responsive img-circle img-thumbnail thumb96" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Contact" /></div>
                            <h3 className="m0 text-bold">{membersDtails?.userRef?.name}</h3>
                            <div className="mv-lg">
                                <p>{membersDtails?.userRef?.email}</p>
                            </div>
                            <div className="text-center"><a className="btn btn-primary" href="#">Plan: {membersDtails?.product?.amount}</a></div>
                        </div>
                    </div>
                    <div className="panel panel-default hidden-xs hidden-sm">
                        <div className="panel-heading">
                            <div className="panel-title text-center">Add Members Details</div>
                        </div>
                        <div className="panel-body p-4" >
                            <div className="media d-flex">
                                <div className="media-left media-middle">
                                    <a href="#"><img className="media-object img-circle img-thumbnail thumb48" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Contact" /></a>
                                </div>
                                <div className="media-body pt-sm ">
                                    <div className="text-bold ms-4"><h4>{membersDtails?.addedMembers}</h4>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="h4 text-center p-4">Membership Information</div>
                            <div className="row pv-lg">
                                <div className="col-lg-2" />
                                <div className="col-lg-8">
                                    <form className="form-horizontal ng-pristine ng-valid">
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label" htmlFor="name">Name</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" id="name" type="text" value={membersDtails?.userRef?.name} disabled />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label" htmlFor="email">Email</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" id="email" type="email" value={membersDtails?.userRef?.email} disabled />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-sm-2 control-label" htmlFor="plan">Plan</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" id="plan" type="text" value={membersDtails?.product?.amount} disabled />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label" htmlFor="earnedAmount" style={{ width: "100%" }}>Earned Amount</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" id="earnedAmount" type="text" value={membersDtails?.earnedAmount} disabled />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label" htmlFor="addedMembers" style={{ width: "100%" }}>Added Members</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" id="addedMembers" type="text" value={membersDtails?.addedMembers} disabled />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
