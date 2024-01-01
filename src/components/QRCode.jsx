import React from 'react'

const QRCode = () => {
    return (
        <div>
            <div class="container text-center mt-1">
                <div class="row p-4 ">
                    <div class="col-md-4 col-sm-6 col-xs-12 col-lg-3  card shadow-lg m-3 my-3  " >
                        <div class="card-body cart1" >
                            <br />
                            <img src={require('../Images/box.png')} width={40} />
                            <h5 class="card-title" ><span className='h1'></span>-1000</h5>
                            {/* <p class="card-text">Inceptos Euismod Egestas</p> */}
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QRCode
