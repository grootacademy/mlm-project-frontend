/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios";
import { useState } from "react";
import "./style.css"
import { BaseUrl } from "src/Base_url";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function WithdrawalAmount() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [amount, setAmount] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [response, setResponse] = useState(null);

    const navigate = useNavigate();

    const handleWithdraw = async (e) => {
        e.preventDefault()
        console.log(amount)

        try {
            // eslint-disable-next-line no-shadow
            const response = await axios.post(`${BaseUrl}withdrawal/request`, { amount }, { withCredentials: true }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(response)

            toast.success("Requested successfully")

            navigate("/")
            // Store the token in your app's state or local storage for further use
        } catch (error) {

            if (error.response.data.errors.length > 0) {
                error.response.data.errors.forEach(k => {
                    toast.error(k.msg)
                })
            } else {
                toast.error(error?.response?.data?.message)
            }
            // alert('Login Error:', error.message)

            // Handle login error, e.g., display an error message to the user
        }


    };

    return (

        <div >
            <center>
                <h5 className='text-center register mt-5'>Withdraw</h5>
                <div className='signupBox d-flex justify-content-center flex-wrap align-items-center ' >
                    <form className='signusform' >
                        <div className='row'>

                            <div className='col-md-12 col-sm-12 col-xs-12  text-start'>
                                <div >
                                    <label htmlFor="amount" className="form-label">amount*</label>
                                    <input type="number" name='amount' className=" form-control logininput" placeholder="amount" id="amount" aria-describedby="amountHelp" onChange={(e) => setAmount(e.target.value)} />
                                </div>



                            </div>



                            <center>
                                <button type="submit" onClick={handleWithdraw} className="loginbtn mt-3 w-100 btn text-light ">Withdraw</button>
                            </center>

                        </div>
                        {response && (
                            <div>
                                <h2>Withdrawal Response:</h2>
                                <pre>{JSON.stringify(response, null, 2)}</pre>
                            </div>
                        )}
                    </form>
                </div>
            </center>
        </div >
    );
}
