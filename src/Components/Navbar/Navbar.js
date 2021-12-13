import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export class Navbar extends Component {

    render() {
        if (sessionStorage.getItem("user")) {
            return (
                <>
                    <div className="navbar px-1 px-lg-5 px-md-5 py-3 justify-content-between fixed-top">
                        <div className='mx-2 mx-lg-5 mx-md-5'>
                            <h4>
                                <Link className="dropdown-item" to="/dashboard">
                                    TECHONICLE
                                </Link>
                            </h4>
                        </div>
                        <div className='row'>
                            <div className="dropdown">
                                <button className="dropdown-toggle navBtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {sessionStorage.getItem("user")}&nbsp;&nbsp;
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <Link className="dropdown-item" to="/profile">
                                            <button type="button">Profile</button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/logout">
                                            <button type="button">Logout</button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '64px' }}></div>
                </>
            )
        } else {
            return (
                <>
                    <div className="navbar px-1 px-lg-5 px-md-5 py-3 justify-content-between fixed-top">
                        <div className='mx-2 mx-lg-5 mx-md-5'>
                            <h4>TECHONICLE</h4>
                        </div>
                        <div>
                            <Link to="/login-signup">
                                <button type="button">Login</button>

                                <button type="button">SignUp</button>
                            </Link>
                        </div>
                    </div>
                    <div style={{ height: '64px' }}></div>
                </>
            )
        }
    }
}

export default Navbar
