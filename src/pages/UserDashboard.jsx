/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { BaseUrl } from "src/Base_url";

import "./style.css";
import "./userdashboard.css"

function UserDashboard() {



    const [userData, setUserData] = useState();
    // const [accountData, setAccountData] = useState()
    const [wallet, setWallet] = useState({})
    const [withdrawalHistory, setWithDrawalHistory] = useState([])
    const [depositHistory, setDepositHistory] = useState([])


    const getWallet = async () => {
        try {
            const { data } = await axios.get(`${BaseUrl}getuserWallet`, { headers: { 'Authorization': Cookies.get("token") } })
            setWallet(data.data);
        } catch (error) {
            console.log(error)
        }
    }

    const getWithdrawal = async () => {
        try {
            const { data } = await axios.get(`${BaseUrl}found/withdrawalHistory`, { headers: { 'Authorization': Cookies.get("token") } })
            setWithDrawalHistory(data.data)
        } catch (error) {
            console.log(error?.response?.data?.message)

        }
    }

    const getDeposit = async () => {
        try {
            const { data } = await axios.get(`${BaseUrl}found/depositsHistory`, { headers: { 'Authorization': Cookies.get("token") } })
            console.log(data)
            setDepositHistory(data.data)
        } catch (error) {
            console.log(error?.response?.data?.message)
        }
    }





    const totalWithdrawal = withdrawalHistory.reduce((total, transaction) => total + transaction.amount, 0);
    const totalDeposit = depositHistory.reduce((total, transaction) => total + transaction.amount, 0);




    const handleAvatarOptionClick = (key) => {
        Cookies.remove("token")
        // navigate("/login")
    }

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': Cookies.get("token")
        };

        axios.get(`${BaseUrl}user/profile`, { headers })
            .then(response => {
                setUserData(response.data);

            })
            .catch(error => {
                // Handle error
                console.error('Error fetching user details:', error);
            });




        getWallet()
        getWithdrawal()
        getDeposit()
    }, []);






    return (
        <div>

            <div className="page-wrapper">



                <div className="container bg-img-profile pt-5 pb-3 mt-5">
                    <div className="row">

                        <div className="col-4 ps-2"><img width="75px" className="imaged rounded-circle shadow" src="assets/profileImg/avatar.jpg" /></div>

                        <div className="col-8 pt-2"><h3 className="text-light">{userData?.data?.name}</h3></div>

                    </div>

                </div>


                <div className="container pt-2">
                    <div className="wallet-card">
                        <div className="balance">
                            <div className="left">
                                <span className="title">My Balance</span>
                                <h1 className="total">{wallet?.amount || 0}</h1>
                            </div>
                            <div className="right text-center ">
                                <a href="#" className="text-primary">

                                    <div className="chip chip-media">
                                        <i className="chip-icon bg-primary">
                                            <icon style={{ fontSize: "20px;" }} name="basket" role="img" className="md hydrated" aria-label="person" />
                                        </i>
                                        {/* <span className="chip-label">No Plan</span> */}
                                    </div>



                                </a>
                            </div>
                        </div>
                        {/* <div className="wallet-footer">
                            <div className="item">
                                <a href="#">
                                    <div className="shadow icon-wrapper bg-warning">
                                        <img style={{ width: "2rem;" }} src="assets/profileImg/arrow up.png" alt="" />
                                    </div>
                                    <strong>Deposit</strong>
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <div className="shadow icon-wrapper bg-secondary">
                                        <img style={{ width: "2rem;" }} src="assets/profileImg/add user.png" alt="" />
                                    </div>
                                    <strong>Invite</strong>
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <div className="shadow icon-wrapper bg-success">
                                        <img style={{ width: "2rem;" }} src="assets/profileImg/arrow down.png" alt="" />
                                    </div>
                                    <strong>Withdraw</strong>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>



                <div className="container">
                    <div className="row mt-2">
                        <div className="col-6">
                            <div className="stat-box">
                                <div className="title">Total Deposit</div>
                                <h2 className="text-warning">{totalDeposit}</h2>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="stat-box">
                                <div className="title">Total Withdraw</div>
                                <h2 className="text-success">{totalWithdrawal}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        {/* <div className="col-6">
                            <div className="stat-box">
                                <div className="title">Complete</div>
                                <h2 className="">0 Task</h2>
                            </div>
                        </div> */}
                        {/* <div className="col-6">
                            <div className="stat-box">
                                <div className="title">Remain</div>
                                <h2 className="">0 Task</h2>
                            </div>
                        </div> */}
                    </div>
                </div>






                <div className="container">
                    <div style={{ backgroundColor: "rgb(255, 255, 255);" }} className="rounded mt-2">

                        {/* <!--<div className="listview-title mt-1">Menu</div>--> */}


                        <ul className="listview flush transparent no-line image-listview">
                            <li>
                                <Link to="/profile" className="item">
                                    <div className="icon-box bg-primary">
                                        <img style={{ width: "1.5rem;" }} src="assets/profileImg/tools.png" alt="" />
                                    </div>
                                    <div className="in">
                                        Account Info
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link to="/changePassword" class="item">
                                    <div className="icon-box text-light bg-primary">
                                        <img style={{ width: "1.5rem;" }} src="assets/profileImg/key.png" alt="" />
                                    </div>
                                    <div className="in">
                                        Change Password
                                    </div>
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>


                <div className="container">
                    <div style={{ backgroundColor: "rgb(255, 255, 255);" }} className="rounded mt-2">

                        {/* <!--<div className="listview-title mt-1">Menu</div>--> */}


                        <ul className="listview flush transparent no-line image-listview">

                            {/* <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-primary">
                                        <img style={{ width: "1.5rem;" }} src="assets/profileImg/podium.png" alt="" />
                                    </div>
                                    <div className="in">
                                        Commissions
                                    </div>
                                </a>
                            </li> */}
                            <li>

                                <Link to="/depositHistory" className="item">
                                    <div className="icon-box bg-primary">
                                        <img style={{ width: "1.5rem;" }} src="assets/profileImg/card.png" alt="" />
                                    </div>
                                    <div className="in">
                                        Deposit History
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/withdrawalHistory" className="item">
                                    <div className="icon-box bg-primary">
                                        <img style={{ width: "1.5rem;" }} src="assets/profileImg/cash.png" alt="" />
                                    </div>
                                    <div className="in">
                                        Withdraw History
                                    </div>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>


                <div className="container">
                    <div style={{ backgroundColor: "rgb(255, 255, 255);" }} className="rounded mt-2">



                        <ul className="listview flush transparent no-line image-listview">


                            <li>

                                <Link to="/myMemberships" className="item">
                                    <div className="icon-box bg-primary">
                                        <img style={{ width: "1.5rem;" }} src="assets/profileImg/people.png" alt="" className="imagedashboard" />
                                    </div>
                                    <div className="in">
                                        My Memberships
                                    </div>
                                </Link>

                            </li>

                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-primary">
                                        <img style={{ width: "1.5rem;" }} src="assets/profileImg/cloud downlode.png" alt="" />
                                    </div>

                                    <div className="in">
                                        Install Software
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>


                <div className="container">
                    <div style={{ backgroundColor: "rgb(255, 255, 255)" }} className="rounded mt-2">

                        {/* <!--<div className="listview-title mt-1">Menu</div>--> */}


                        <ul className="listview flush transparent no-line image-listview">

                            <li>
                                <Link to="/login" onClick={handleAvatarOptionClick} className="item">
                                    <div className="icon-box bg-primary">
                                        <img style={{ width: "1.5rem;" }} src="assets/profileImg/logout.png" alt="" />
                                    </div>
                                    <div className="in">
                                        Logout
                                    </div>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>











            </div>

        </div >


    )
}

export default UserDashboard
