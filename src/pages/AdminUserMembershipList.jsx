import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import DataTable from 'react-data-table-component';
import { useLocation, useNavigate } from 'react-router-dom';

import { formatDate } from 'src/utils/format-date';

import { BaseUrl } from 'src/Base_url';

import Label from 'src/components/label';


const AdminUserMembershipList = () => {

    const [membership, setMembership] = useState([])

    const location = useLocation()
    const navigate = useNavigate()

    const actionHandle = (details) => {
        // router.push('/adminUserMembershipList');

        navigate('/admin/adminUserMembershipDetails', { state: { details } })


    }


    const columns = [
        {
            name: 'S. No.',
            cell: (row, index) => index + 1
        },
        {
            name: 'transactionId',
            selector: row => row?.transactionId,
            sortable: true,
        },
        {
            name: 'userRef',
            selector: row => `₹${row?.userRef}`,
            sortable: true,
        },
        {
            name: 'UPI Id',
            selector: row => <div style={{ whiteSpace: "normal" }}>{row?.upiId}</div>,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => <div style={{ width: "200px", height: "50px", overflow: "auto" }}>{row?.status}</div>,
            sortable: true,
        },
        {
            name: 'ApprovedStatus',
            selector: row => <div style={{ width: "200px", height: "50px", overflow: "auto" }}>{row?.approvedStatus}</div>,
            sortable: true,
        },
        {
            name: 'Created On',
            selector: row => formatDate(row?.createdOn),
            sortable: true,
        },
        {
            name: 'approved On',
            selector: row => formatDate(row?.approvedOn),
            sortable: true,
        },
        {
            name: 'referralCode',
            selector: row => <div style={{ whiteSpace: "normal" }}>{row?.referralCode}</div>,
            sortable: true,
        },
        {
            name: 'addedMembers',
            selector: row => <div style={{ whiteSpace: "normal" }}>{row?.addedMembers}</div>,
            sortable: true,
        },
        {
            name: 'Details',
            selector: row => <Label onClick={() => actionHandle(row)} color='info' style={{ whiteSpace: "normal", cursor: "pointer" }} >View More</Label>,

        },

    ]

    const getData = async () => {
        try {

            const { data } = await axios.get(`${BaseUrl}membership/getUserMemberships/${location.state?.membership?._id}`, { headers: { 'Authorization': Cookies.get("token") } })
            setMembership(data)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }


    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div>
        <h3 className='text-center'>Membership List</h3>

        <DataTable columns={columns} pagination data={membership} />
    </div>

}

export default AdminUserMembershipList
