import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { FaGifts } from "react-icons/fa6";
const Referred_users = () => {
    const [link, setLink] = useState("https://pyple.satisfaction-script.shop/register/9996750411")
    const copyLink = () => {
        let copiedData = document.getElementById("mybox")
        copiedData.select()
        navigator.clipboard.writeText(link)

    }
    return (
        <>
            <div>
                <div className='Invite_Friend_box'>
                    <h5>Invite Friend</h5>
                </div>

                <div className='Invitebtns'>
                    <h6><span className='h1 me-2'><MdOutlineEmail /></span>Invite Friend</h6>
                    <h6><span className='h1  me-2'><FaUserPlus /></span>Invite Friend</h6>

                    <h6><span className='h1  me-2'><FaGifts /></span>Invite Friend</h6>

                </div>



            </div>
            <div className='mt-5 inviteLink p-5'>
                <h5 className='text-dark'><span className='text-light'>My Invitation Link</span></h5>
                <div className='d-flex justify-content-center'>
                    <input id="mybox" className='form-control mt-1' value={link} disabled />
                    <button className='ms-2 mb-3' onClick={copyLink}>Copy</button>
                </div>
            </div>

            <div className='container'>
                <table class="table mt-5">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Referred_users
