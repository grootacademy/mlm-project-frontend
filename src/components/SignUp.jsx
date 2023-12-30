import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
const SignUp = () => {
    return (
        <div>
            <h5 className='text-center register mt-5'>Register Now</h5>
            <br />
            <div className='signupBox'>
                <form className='signusform w-75' >
                    <b className=' text-center'>Create an account</b>
                    <div className='row mt-3 text-start'>
                        <div className='col-md-6'>
                            <div className=" ">
                                <label for="exampleInputEmail1" className="form-label">First Name*</label>
                                <input type="text" className="form-control inputbox" placeholder="Write your first name here..." id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="">
                                <label for="email" className="form-label">Email*</label>
                                <input type="email" placeholder="Write your email here..." className="form-control inputbox" id="email" />
                            </div>

                            <div className="">
                                <label for="lastName" className="form-label">Country*</label>
                                <select className="form-select inputbox" aria-label="Default select example">
                                    <option selected>Country</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="">
                                <label for="username" className="form-label">UserName*</label>
                                <input type="email" placeholder="Write your username here..." className="form-control inputbox" id="username" aria-describedby="emailHelp" />
                            </div>
                            <div className="">
                                <label for="password" className="form-label">password*</label>
                                <input type="password" placeholder="Write your password here..." className="form-control inputbox" id="password" aria-describedby="emailHelp" />
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className="">
                                <label for="lastName" className="form-label">LastName*</label>
                                <input type="email" className="form-control inputbox" placeholder="Write your last name here..." id="lastName" aria-describedby="emailHelp" />
                            </div>

                            <div className="">
                                <label for="Mobile" className="form-label">Mobile*</label>
                                <input type="number" placeholder="Write your mobile number here..." className="form-control inputbox" id="Mobile" />
                            </div>
                            <div className="">
                                <label for="email" className="form-label">Email*</label>
                                <input type="email" placeholder="Write your email here..." className="form-control inputbox" id="email" />
                            </div>

                            <div className="">
                                <label for="cpassword" className="form-label">cpassword*</label>
                                <input type="cpassword" placeholder="Write your Cpassword here..." className="form-control inputbox" id="cpassword" aria-describedby="emailHelp" />
                            </div>
                            <div className="mt-3 form-check">
                                <label className="form-check-label mt-3" for="exampleCheck1">I Agree this term*</label>
                                <input type="checkbox" className="form-check-input mt-3" id="exampleCheck1" />
                            </div>
                        </div>

                        <center>
                            <button type="submit" className="subsignin mt-3 w-75 btn btn-secondary">Submit</button>
                        </center>
                    </div>

                    <Link className='text-center mt-3 forgotbtn' to='/' >Already have an account ? </Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp
