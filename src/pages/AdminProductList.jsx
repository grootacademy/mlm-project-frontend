import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import DataTable from 'react-data-table-component';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

import { formatDate } from 'src/utils/format-date';

import { BaseUrl } from 'src/Base_url';

import Label from 'src/components/label';

const AdminProductList = () => {

    const [productList, setProductList] = useState([])

    const navigate = useNavigate();

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
            name: 'Amount',
            selector: row => `₹${row?.amount}`,
            sortable: true,
        },
        {
            name: 'UPI Id',
            selector: row => <div style={{ whiteSpace: "normal" }}>{row?.upiId}</div>,
            sortable: true,
        },
        {
            name: 'Description',
            selector: row => <div style={{ width: "200px", height: "50px", overflow: "auto" }}>{row?.description}</div>,
            sortable: true,
        },
        {
            name: 'Created On',
            selector: row => formatDate(row?.createdAt),
            sortable: true,
        },
        {
            name: 'Actions',
            selector: row => <>
                <Label color='success' style={{ cursor: "pointer" }} onClick={() => handleEdit(row)}>Edit</Label>
                <Label color='error' style={{ cursor: "pointer" }} className="ms-1" onClick={() => handleDelete(row._id)}>Delete</Label>
            </>
        },
    ]

    const getData = async () => {
        try {
            const { data } = await axios.get(`${BaseUrl}getProducts`, { headers: { 'Authorization': Cookies.get("token") } })
            setProductList(data.products)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    const handleEdit = (product) => {
        navigate('/admin/addProduct', { state: { product } })
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {

                deleteProduct(id).then(() => {
                    getData()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                })
            }
        })
    }

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${BaseUrl}product/delete/${id}`, { headers: { 'Authorization': Cookies.get("token") } })
            toast.success("product deleted successfully")
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return <div>
        <h3 className='text-center'>Product List</h3>
        <div className='text-end my-1'>
            <Link to='/admin/addProduct'>
                <Button variant='outlined' >Add Product</Button>
            </Link>
        </div>
        <DataTable columns={columns} pagination data={productList} />
    </div>

}

export default AdminProductList
