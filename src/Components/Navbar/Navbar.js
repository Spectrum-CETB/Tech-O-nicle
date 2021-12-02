import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <>
                <div className="navbar mx-2 px-1 mx-lg-5 px-lg-5 mx-md-5 px-md-5 mt-3 justify-content-between">
                    <div>
                        <h4>TECHONICLE</h4>
                    </div>
                    <div>
                        <Link to="/login-signup"><button type="button">Login</button>
                        
                        <button type="button">SignUp</button> </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar
