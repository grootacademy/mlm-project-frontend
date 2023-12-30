import React from 'react'
import "./style.css"
import { SiWalletconnect } from "react-icons/si";
import { IoIosBasket } from "react-icons/io";
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className='profile-header text-start'>
                <div className=''>
                    <div className='d-flex gap-3 '>
                        <img className='ms-3 mt-2' src={require('../Images/Profile-Avatar-PNG.png')} width={78} height={78} />
                        <div>
                            <h5 className='mt-3 text-light' ><b>Aman Saharan</b></h5>
                            <h5 className='mt-2 text-light '><b>Uid: 9996750411s</b></h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <div className='col-md-12'>
                    <div className='w-100 h-auto balenceBox'>
                        <div className='balence-box1 mt-4'><h4 className='mt-5'><span className='fs-1 '><SiWalletconnect /></span> My Balance</h4></div>
                        <div className='d-flex flex-wrap h-auto justify-content-evenly text-light p-4'>

                            <div className='balence-box2'><h4 className='mt-5'>0.00 USDT</h4></div>
                            <div className='balence-box3'><i className=' fs-1'><IoIosBasket /> </i>no plan</div>


                        </div>
                        <hr className />
                        <div className='balanceTran mx-2 my-5'>
                            <div className='blancebtn1 btn'>Deposit</div>
                            <Link to="/Referred_users"><div className='blancebtn1 btn'>Invite</div></Link>
                            <div className='blancebtn1 btn'>Withdraw</div>

                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Dashboard
