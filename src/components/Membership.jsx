import React from 'react'
import { BsCurrencyRupee } from "react-icons/bs";
import { TbStatusChange } from "react-icons/tb";
import { BsBank } from "react-icons/bs";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FcCollaboration } from "react-icons/fc";
import { FaUsers } from "react-icons/fa";
import { SiYamahamotorcorporation } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

const Membership = () => {
    const navigate = useNavigate()
    const HandleStatusPage = () => {
        navigate('/Status_Page')
    }
    return (
        <div>
            <div className='Invite_Friend_box mt-5'>
                <h5 className='text-dark'>Membership</h5>
            </div>
            <div className='d-flex justify-content-center '>
                <div class="container text-center mt-1">
                    <div class="row p-4 bg-dark membershipbox " onClick={HandleStatusPage}>
                        <div className='col-md-6 col-sm-12 col-xs-12 col-lg-6'>
                            <div className='row card-body bg-dark rounded-2 text-light'>
                                <div className='col-4'><h1><span><FaEnvelopeOpenText /></span></h1></div>
                                <div className='col-8 text-start'> <b className=''>Status:</b><b className='ms-5'>Active</b></div>
                                <br />
                                <div className='row card-body  rounded-2 '>
                                    <div className='col-4'><h1><span><FaUsers /></span></h1></div>
                                    <div className='col-8 text-start'> <b className='ms-2'>Amount :</b><b className='ms-5'>200000</b></div>

                                </div>

                                <div className='row card-body  rounded-2 '>
                                    <div className='col-4'><h1><span className='text-light'><SiYamahamotorcorporation /></span></h1></div>
                                    <div className='col-8  text-start'> <b className='ms-2'>Ref- Code:</b><b className='ms-5'>234sdfghj45678</b></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Membership
