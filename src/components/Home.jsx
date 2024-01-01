import React from 'react'
import Slider from './Slider'
import { IoIosWallet } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { GoCrossReference } from "react-icons/go";
import { FaShareNodes } from "react-icons/fa6";
import { GiInnerSelf } from "react-icons/gi";
import Wallet from './Wallet';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const walletHandle = () => {
        navigate('/Wallet')

    }
    const referFriend = () => {
        navigate('/Membership')

    }

    const MyMemberShip = () => {
        navigate('/Membership')

    }

    const buyMemberShip = () => {
        navigate('/Product')
    }
    return (
        <div className='bg-gradient-blend'>
            <div class="container text-center">
                <div class="row">
                    <div class="col-12">
                        <div className="img-mask mask-2  mt-5">
                            <img src={require('../Images/about28@2x.jpg')} srcset={require('../Images/about28@2x.jpg')} alt="" />
                        </div>
                        <div className='text-secondary mt-4'>HELLO! I'M JULIA</div>
                        <h1>I’m a corporate <i>brand designer</i> based in <br /> New York City.</h1>
                        <p className='text-secondary fw-lighter '>I’m very passionate about the work that I do, and if you are curious you can find my works on <br /> Dribbble, my portfolio on Behance, and my shots on Instagram.</p>
                    </div>
                </div>
            </div>



            <div class="container text-center">
                <div class="row ">
                    <div class="col-md-4 col-sm-6 col-xs-12 col-lg-3  card shadow-lg   mx-4 my-3  mx-3 my-3 " >
                        <div class="card-body" onClick={walletHandle}>
                            <br />
                            <h5 class="card-title" ><span className='h1'><IoIosWallet /></span>-Wallet</h5>
                            {/* <p class="card-text">Inceptos Euismod Egestas</p> */}
                            <br />
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12 col-lg-3  card shadow-lg   mx-4 my-3  ">
                        <div class="card-body" onClick={buyMemberShip}>
                            <br />
                            <h5 class="card-title"><span className='h1'><FaUserTie /></span>-Buy MemberShip</h5>
                            {/* <p class="card-text">Inceptos Euismod Egestas</p> */}
                            <br />
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12 col-lg-3  card shadow-lg   mx-4 my-3  ">
                        <div class="card-body" onClick={referFriend}>
                            <br />
                            <h5 class="card-title"><span className='h1'><GoCrossReference /></span>-Refer a friend </h5>
                            {/* <p class="card-text">Inceptos Euismod Egestas</p> */}
                            <br />
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12 col-lg-3  card shadow-lg   mx-4 my-3  ">
                        <div class="card-body  ">
                            <br />
                            <h5 class="card-title"><span className='h1'><FaShareNodes /></span>-Invite Friend</h5>
                            {/* <p class="card-text">Inceptos Euismod Egestas</p> */}
                            <br />
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12 col-lg-3  card shadow-lg   mx-4 my-3  ">
                        <div class="card-body  " onClick={MyMemberShip}>
                            <br />
                            <h5 class="card-title"><span className='h1'><GiInnerSelf /></span>-My MemberShip</h5>
                            {/* <p class="card-text">Inceptos Euismod Egestas</p> */}
                            <br />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Home
