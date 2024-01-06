import axios from 'axios';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import DataTable from 'react-data-table-component'

import { formatDate } from 'src/utils/format-date';

import { BaseUrl } from 'src/Base_url';

import Label from 'src/components/label';

const AdminWithdrawalsView = () => {

  const [withdrawals, setWithdrawals] = useState([])

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

          const res = await axios.put(`${BaseUrl}withdrawal/approve`, { withdrawalId: id }, { withCredentials: true })
          // window.location.reload();
          toast.success(res?.data?.message);
          await getWithdrawal()
          // Swal.fire("Saved!", "", "success");
        } catch (error) {
          toast.error(error.message);
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  const columns = [
    {
      name: 'User Name',
      selector: row => row?.createdBy?.name,
      sortable: true,
    },
    {
      name: 'Amount',
      selector: row => row?.amount,
      sortable: true,
    },
    {
      name: 'Created On',
      // eslint-disable-next-line no-unsafe-optional-chaining
      selector: row => formatDate(row?.createdOn),
      sortable: true,
    },

    {
      name: 'Approval status',
      selector: row => <Label color={((row?.approvedStatus === 'Pending' || row?.approvedStatus === 'Rejected') && 'error') || 'success'}>{row.approvedStatus}</Label>
    },
    {
      name: 'Actions',
      selector: row => row.approvedStatus === "Pending" && <Label color='success' style={{ cursor: "pointer" }} onClick={() => handleApproval(row._id)}>Approve</Label>
    },

  ];

  const getWithdrawal = async () => {
    try {
      const { data } = await axios.get(`${BaseUrl}withdrawal/getWithdrawalList`, { withCredentials: true })
      setWithdrawals(data.data)
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  useEffect(() => {
    getWithdrawal()
  }, [])

  return (
    <div>
      <h3 className='text-center'>Withdrawals</h3>

      <DataTable
        columns={columns}
        data={withdrawals}
        pagination
      />
    </div>
  )
}

export default AdminWithdrawalsView
