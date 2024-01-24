/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import DataTable from 'react-data-table-component';

// import { useRouter } from 'src/routes/hooks';

import { useNavigate } from 'react-router-dom';

import { formatDate } from 'src/utils/format-date';

import { BaseUrl } from 'src/Base_url';

import Label from 'src/components/label';

const AdminUserList = () => {


    // const router = useRouter()
    const navigate = useNavigate()

    const [userList, setUserList] = useState([])


    const actionHandle = (membership) => {
        // router.push('/adminUserMembershipList');

        navigate('/admin/adminUserMembershipList', { state: { membership } })


    }

    const columns = [
        {
            name: 'S. No.',
            cell: (row, index) => index + 1
        },
        {
            name: 'Name',
            selector: row => row?.name,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: row => row?.phone,
            sortable: true,
        },
        {
            name: 'UPI Id',
            cell: (row) => (
                <div >
                    {row?.upiId}
                </div>
            ),
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row?.email,
            sortable: true,
        },
        {

            name: 'Register On',
            cell: (row) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                <div  >
                    {formatDate(row?.createdAt)}
                </div>
            ),
            sortable: true,
        },
        {
            name: 'Check info',
            selector: (row) => (<Label color="success" style={{ cursor: "pointer" }} onClick={() => actionHandle(row)}>Details</Label>),
            // sortable: true,
        },
    ]

    const getData = async () => {
        try {
            const { data } = await axios.get(`${BaseUrl}getAllUsers`, { headers: { 'Authorization': Cookies.get("token") } })
            console.log(data)
            setUserList(data.users)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return <div>
        <h3 className='text-center'>User List</h3>
        <DataTable columns={columns} pagination data={userList} />
    </div>

}

export default AdminUserList
