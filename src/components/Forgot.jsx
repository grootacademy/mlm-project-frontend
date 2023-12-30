import React from 'react'
import "./style.css"
const Forgot = () => {
    return (
        <div >
            <h5 className='text-center register mt-5'>Forgot Password</h5>
            <div className='signupBox w-50'>
                <form className='forgotform ' >
                    <div className='row'>

                        <div className='col-12  text-start'>
                            <div class="">
                                <label for="email" class="form-label ms-2">Please enter your Email*</label>
                                <input type="email" placeholder="Email" class="form-control  logininput" id="email" />
                            </div>
                        </div>

                        <center>
                            <button type="submit" class="loginbtn mt-3 w-100 btn btn-secondary">Update </button>
                        </center>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Forgot
