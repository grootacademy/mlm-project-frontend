import React from 'react'
import "./style.css"
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    return (
        <div >
            <h5 className='text-center register mt-5'>Login Now</h5>
            <div className='signupBox w-50'>
                <form className='signusform ' >
                    <div className='row'>

                        <div className='col-12  text-start'>
                            <div class="">
                                <label for="UserName" class="form-label">UserName*</label>
                                <input type="text" class="form-control logininput" placeholder="UserName" id="username" aria-describedby="emailHelp" />
                            </div>

                            <div class="">
                                <label for="password" class="form-label">Password*</label>
                                <input type="password" placeholder="Password" class="form-control  logininput" id="email" />
                            </div>

                        </div>
                        <Link className='text-start forgotbtn' to='/SignUp' >Create Account ? </Link>

                        <Link className='text-end forgotbtn' to='/Forgot' >Forgotten Password ? </Link>


                        <center>
                            <button type="submit" class="loginbtn mt-3 w-100 btn btn-secondary">Login</button>
                        </center>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login
