import React, { useState } from 'react'
import { BsCurrencyRupee } from "react-icons/bs";
import Swal from 'sweetalert2';
import QRCode from 'react-qr-code';
const Product = () => {
    const [inputData, setInputData] = useState('');

    const handleInput = (e) => {
        setInputData(e.target.value);
    };


    const showQRCodeAlert = () => {

        Swal.fire({
            title: 'QR Code Alert',
            html: (
                <div>
                    <p>Enter data for QR code:</p>
                    <input
                        type="text"
                        placeholder="Enter data"
                        value={inputData}
                        onChange={handleInput}
                    />
                    <QRCode value={inputData} />
                </div>
            ),
            confirmButtonText: 'Close',
        });
    };


    return (
        <div>



            <div class="container text-center mt-1">
                <div class="row p-4  ">
                    <div class="col-md-4 col-sm-6 col-xs-12 col-lg-3  card shadow-lg m-3  my-3  " >
                        <div class="card-body cart1" onClick={showQRCodeAlert}>
                            <br />
                            <img src={require('../Images/box.png')} width={40} />
                            <h5 class="card-title" ><span className='h1'><BsCurrencyRupee /></span>-1000</h5>
                            {/* <p class="card-text">Inceptos Euismod Egestas</p> */}
                            <br />


                        </div>
                    </div>


                    <div class="col-md-4 col-sm-6 col-xs-12 col-lg-3  card shadow-lg m-3  my-3  ">
                        <div class="card-body cart2" >
                            <br />
                            <img src={require('../Images/box.png')} width={40} />

                            <h5 class="card-title"><span className='h1'><BsCurrencyRupee /></span>-2000</h5>
                            {/* <p class="card-text">Inceptos Euismod Egestas</p> */}
                            <br />
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12 col-lg-3  card shadow-lg m-3  my-3  ">
                        <div class="card-body cart3" >
                            <br />
                            <img src={require('../Images/box.png')} width={40} />

                            <h5 class="card-title"><span className='h1'><BsCurrencyRupee /></span>-3000</h5>
                            {/* <p class="card-text">Inceptos Euismod Egestas</p> */}
                            <br />
                        </div>
                    </div>


                    <div class="col-md-4 col-sm-6 col-xs-12 col-lg-3  card shadow-lg m-3  my-3  ">
                        <div class="card-body cart4" >
                            <br />
                            <img src={require('../Images/box.png')} width={40} />

                            <h5 class="card-title"><span className='h1'><BsCurrencyRupee /></span>-4000</h5>
                            {/* <p class="card-text">Inceptos Euismod Egestas</p> */}
                            <br />
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12 col-lg-3  card shadow-lg m-3  my-3  ">
                        <div class="card-body cart5" >
                            <br />
                            <img src={require('../Images/box.png')} width={40} />

                            <h5 class="card-title"><span className='h1'><BsCurrencyRupee /></span>-5000</h5>
                            {/* <p class="card-text">Inceptos Euismod Egestas</p> */}
                            <br />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Product
