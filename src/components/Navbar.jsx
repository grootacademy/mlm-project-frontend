import React from 'react'
import { CgProfile } from "react-icons/cg";
import { VscBellDot } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navheader'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand text-light" href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link  text-light active" aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  text-light" to="/Task">Task</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  text-light" to="/Contactus">Contact us</Link>
                            </li>

                        </ul>
                        <div class="d-flex" role="search">
                            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                            <button class="btn bell me-3 rounded-5 " type="submit"><VscBellDot /></button>

                            <Link to="/Dashboard"><button class="btn btn-outline-danger rounded-5 " type="submit"><CgProfile />
                            </button></Link>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar
