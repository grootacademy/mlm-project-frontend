import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import DataTable from 'react-data-table-component';

import { TableCell } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { formatDate } from 'src/utils/format-date';

import { BaseUrl } from 'src/Base_url';

import Label from 'src/components/label';

const AdminMembershipList = () => {

    const [productList, setProductList] = useState([])

    const columns = [
        {
            name: 'S. No.',
            selector: (row, index) => index + 1
        },
        {
            name: 'Name',
            selector: row => row?.userRef?.name,
            sortable: true,
        },
        {
            name: 'Created On',
            selector: row => <div style={{ whiteSpace: "normal" }}>{formatDate(row?.createdOn)}</div>,
            sortable: true,
        },
        {
            name: 'Amount',
            selector: row => row?.product?.amount,
            sortable: true,
        },
        {
            name: 'Approval Status',
            selector: row => <Label color={(row.approvedStatus === 'Pending' || row.approvedStatus === 'Rejected') && 'error' || 'success'}>{row.approvedStatus}</Label>,
            sortable: true,
        },
        {
            name: 'Transaction Id',
            selector: row => <div style={{ whiteSpace: "normal" }}>{row?.transactionId}</div>,
            sortable: true,
        },
        {
            name: 'Actions',
            cell: row => <>
                {row.approvedStatus === "Pending" && <TableCell align="center">
                    <Grid><Label color='success' style={{ cursor: "pointer" }} onClick={() => handleApproval(row._id)}>Approve</Label></Grid>
                </TableCell>}
            </>
        },
    ]

    const getData = async () => {
        try {
            const { data } = await axios.get(`${BaseUrl}membership/getMemberships`, { headers: { 'Authorization': Cookies.get("token") } })
            setProductList(data)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }


    const handleApproval = (id) => {
        Swal.fire({
            title: "Do you want to approve this request?",
            showDenyButton: true,
            confirmButtonText: "Approve",
            denyButtonText: `Don't approve`
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {

                try {

                    const res = await axios.put(`${BaseUrl}membership/approval`, { membershipId: id }, { headers: { 'Authorization': Cookies.get("token") } })
                    // window.location.reload();
                    toast.success(res?.data?.message);
                    await getData()
                    // Swal.fire("Saved!", "", "success");
                } catch (error) {
                    toast.error(error.message);
                }
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    useEffect(() => {
        getData()
    }, [])

    return <div>
        <h3 className='text-center'>Membership List</h3>
        <DataTable columns={columns} pagination data={productList} />
    </div>

}

export default AdminMembershipList
