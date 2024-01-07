import axios from 'axios';
import toast from 'react-hot-toast';
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import DataTable from 'react-data-table-component';

import { formatDate } from 'src/utils/format-date';

import { BaseUrl } from 'src/Base_url';

const AdminUserList = () => {

    const [userList, setUserList] = useState([])

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
                <div >
                    {formatDate(row?.createdAt)}
                </div>
            ),
            sortable: true,
        }
    ]

    const getData = async () => {
        try {
            const { data } = await axios.get(`${BaseUrl}getAllUsers`, { withCredentials: true })
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
