import axios from 'axios';
import toast from 'react-hot-toast';
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import DataTable from 'react-data-table-component';

import { BaseUrl } from 'src/Base_url';
import { formatDate } from 'src/utils/format-date';

const WithDrawalHistoryPage = () => {

    const [withdrawalHistory, setWithDrawalHistory] = useState([])

    const columns = [
        {
            name: 'Created On',
            selector: row => formatDate(row?.createdOn),
            sortable: true,
        },

        {
            name: 'Amount',
            selector: row => row?.amount,
            sortable: true,
        },
        {
            name: 'Approved On',
            selector: row => row?.approvedOn,
            sortable: true,
        }
    ]

    const getData = async () => {
        try {
            const { data } = await axios.get(`${BaseUrl}found/withdrawalHistory`, { withCredentials: true })
            setWithDrawalHistory(data.data)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return <div>
        <h3 className='text-center'>Withdrawal history</h3>
        <DataTable columns={columns} data={withdrawalHistory} />
    </div>

}

export default WithDrawalHistoryPage
