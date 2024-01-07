/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios'
import toast from 'react-hot-toast'
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Button } from '@mui/material'

import { BaseUrl } from 'src/Base_url'


const AdminAddProduct = () => {
    const [amount, setAmount] = useState(null)
    const [name, setName] = useState("")

    const navigate = useNavigate()
    const location = useLocation()

    const handleAmountChange = (e) => {
        const { value } = e.target;

        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(value)) {
            setAmount(value)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd()
    }

    const handleAdd = async () => {
        try {

            if (location.state?.product) {
                await axios.put(`${BaseUrl}/product/update/${location.state?.product?._id}`, { amount, name }, { withCredentials: true })
            } else {
                await axios.post(`${BaseUrl}create`, { amount, name }, { withCredentials: true })
            }

            if (location.state?.product) {
                toast.success("Product edited successfully")
            } else {
                toast.success("Product edited successfully")
            }

            navigate("/admin/productList")
        } catch (err) {

            if (err?.response?.data?.errors?.length > 0) {
                err.response.data.errors.forEach(k => {
                    toast.error(k.msg)
                })
            } else {
                toast.error(err?.response?.data?.message)
            }
        }
    }


    useEffect(() => {

        if (location.state?.product) {
            setAmount(location.state.product.amount)
            setName(location.state.product.name)
        }

    }, [location.state?.product])


    return (
        <div className='container'>

            <h4 className='text-center'>Add Product</h4>
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <form className='border p-4 rounded-4' >

                        <div className="form-group">
                            <label htmlFor="name" style={{ fontSize: "12px" }}>Product Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder="Product name" />
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="amount" style={{ fontSize: "12px" }}>Product Amount</label>
                            <input type="number" value={amount} onChange={handleAmountChange} className="form-control" id="amount" placeholder="Product amount" />
                        </div>

                        <Button type="submit" color='success' variant='contained' className="mt-2" onClick={handleSubmit}>Add</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminAddProduct
