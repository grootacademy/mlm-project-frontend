/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line perfectionist/sort-imports
import axios from 'axios';
import toast from 'react-hot-toast';
// eslint-disable-next-line perfectionist/sort-named-imports
import React, { useEffect, useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import DataTable from 'react-data-table-component';
import { Link, useLocation } from 'react-router-dom';

import { formatDate } from 'src/utils/format-date';
import { daysElapsed } from 'src/utils/daysElapsed';

// eslint-disable-next-line perfectionist/sort-imports
import { BaseUrl } from 'src/Base_url';

import Label from 'src/components/label';
import PlanDetails from 'src/components/PlanDetails';

// eslint-disable-next-line perfectionist/sort-imports
import './style.css'

export default function MembershipDetails() {
    const [membersDtails, setMembersDtails] = useState("")
    const location = useLocation();
    const receivedData = location.state ? location.state.data : null;

    const columns = [
        {
            name: 'Name',
            selector: row => row?.userRef?.name,
            sortable: true,
        },
        {
            name: 'Plan amount',
            selector: row => row?.product?.amount,
            sortable: true,
        },
        {
            name: 'Earned amount',
            // eslint-disable-next-line no-unsafe-optional-chaining
            selector: row => row?.approvedStatus === "Approved" ? row?.product?.amount * 0.25 : 0,
            sortable: true,
        },
        {
            name: 'Approval Status',
            selector: row => <Label color={(row?.approvedStatus === 'Pending' && 'error') || 'success'}>{row.approvedStatus}</Label>
        },

    ];


    const handleCompleteMembership = async () => {

        try {
            await axios.put(`${BaseUrl}membership/complete`, { membershipId: membersDtails._id }, { withCredentials: true })
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message, { duration: 10000 })
        }
    }


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
                    <li className="breadcrumb-item"><Link >Membership Details</Link></li>
                </ol>
            </nav>
            <div className="row ng-scope">
                <div className="col-md-4 ">
                    <div className="panel panel-default p-4">
                        <div className="panel-body text-center">
                            <div className="pv-lg"><img className="center-block img-responsive img-circle img-thumbnail thumb96" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Contact" /></div>
                            <h3 className="m0 text-bold">{membersDtails?.userRef?.name}</h3>
                            <div className="mv-lg">
                                <p className='mb-0'>{membersDtails?.userRef?.email}</p>
                            </div>
                            <div>
                                <b>Total days passed: </b> <span>{daysElapsed(membersDtails.createdOn)}</span>
                            </div>
                            <div className="text-center"><p className="btn btn-primary mt-3 mb-1">Plan: {membersDtails?.product?.amount}</p></div>
                            {membersDtails.status !== "complete" ? <div className="text-center">
                                <a className="btn btn-success" href="#" title="Complete membership and get bonus amount" onClick={handleCompleteMembership}>Complete Membership</a></div>
                                :
                                <div>
                                    <p> Membership is been already completed</p>
                                    <div>
                                        <b>Got Total amount on Completion: </b>
                                        <span>{membersDtails?.deposit?.amount}</span>
                                    </div>
                                </div>
                            }
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
                                    <form className="form-horizontal ng-pristine ng-valid p-3">
                                        {/* <div className="form-group">
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
                                        </div> */}

                                        <div className="form-group">
                                            <label className="col-sm-2 control-label" htmlFor="plan">Plan</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" id="plan" type="text" value={membersDtails?.product?.amount} disabled />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label" htmlFor="earnedAmount" style={{ width: "100%" }}>Earned Amount</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" id="earnedAmount" type="text" value={membersDtails?.earnedAmount || 0} disabled />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label" htmlFor="addedMembers" style={{ width: "100%" }}>Added Members</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" id="addedMembers" type="text" value={membersDtails?.addedMembers} disabled />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-sm-2 control-label" htmlFor="addedMembers" style={{ width: "100%" }}>Refral code</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" id="addedMembers" type="text" value={membersDtails?.referralCode || "-"} disabled />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label" htmlFor="addedMembers" style={{ width: "100%" }}>Created On</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" id="addedMembers" type="text" value={formatDate(membersDtails?.createdOn)} disabled />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-2 control-label" htmlFor="addedMembers" style={{ width: "100%" }}>Approval status</label>
                                            <div className="col-sm-10">
                                                <div><Label color={(membersDtails?.approvedStatus === 'Pending' && 'error') || 'success'}>{membersDtails.approvedStatus}</Label></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <h3 className='text-center'>Task Details</h3>

            <DataTable
                columns={columns}
                data={membersDtails?.childMemberships}
            />

            <hr />
            <PlanDetails />

            <hr />
        </div>
    )
}
