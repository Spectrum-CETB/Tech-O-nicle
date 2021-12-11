import React, { Component } from 'react';
import './style.css';
import bannerImg from "./banner.webp";
import profile from "./profile.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import axios from "axios";

export class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: sessionStorage.getItem('user'),
            profile: [],
            blogs: [],
            message: ""
        }
    }

    UNSAFE_componentWillMount() {

        axios.get('https://spectrumcet.com/techonicle/getProfile.php?email=' + this.state.user)
        .then((res) => {
            if(res.data.status) {
                this.setState({
                    profile: res.data.user[0],
                    message: res.data.response
                });

                console.log(this.state.profile.name);
            } else {
                this.setState({
                    message: res.data.response
                })
            }
        })
        .catch(console.error());

        axios.get('https://spectrumcet.com/techonicle/get-user-blogs.php?email=' + this.state.user)
        .then((res) => {
            if(res.data.status) {
                this.setState({
                    blogs: res.data.blogs,
                    message: res.data.response
                })

                console.log(this.state.blogs)
            } else {
                this.setState({
                    message: res.data.response
                })
            }
        })
        .catch(console.error());
    }

    render() {
        return (
            <>
                <div className="container-fluid mt-2 landscape">
                    <img src={bannerImg} className="img-fluid" alt="bannerImg" />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img src={profile} alt="profile" className="profile" />
                        </div>
                        <div className="col-md-8 pt-md-3 pe-4 profile-text text-center text-md-start">
                            <h4>{ this.state.profile.name }</h4>
                            <p className="mt-2">Product Design and Resource Management LIVE WORLD INC.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid my-4 px-4">
                    <div className="row blogs mx-md-1 mx-lg-5">
                        <div className="col-md-4 col-lg-3 ms-lg-5 px-md-3 px-lg-4 my-3 contacts">
                            <div className="mt-1">
                                <FontAwesomeIcon icon={faMapMarkerAlt} /><span className="ms-1"> St. Peter's Square, Vatican City</span>
                            </div>
                            <div className="mt-1">
                                <FontAwesomeIcon icon={faFacebookF} /><span className="ms-1"> leanSaber1255</span>
                            </div>
                            <div className="mt-1">
                                <FontAwesomeIcon icon={faLinkedinIn} /><span className="ms-1"> shreyas_arya</span>
                            </div>
                            <div className="mt-1">
                                <FontAwesomeIcon icon={faTwitter} /><span className="ms-1"> shrey768</span>
                            </div>
                        </div>
                        <div className="col-md-8 my-blogs my-3">
                            <h5>MY BLOGS</h5>
                            {
                                this.state.blogs.map((blog) => {
                                    return(
                                        <div className="card px-md-3 mt-4">
                                            <div className="row align-items-center">
                                                <div className="col-4 col-md-4 col-lg-2">
                                                    <img src={blog.bImage} alt="blog" className="img-fluid"/>
                                                </div>
                                                <div className="col cards">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{blog.bName}</h5>
                                                        <p className="card-text mt-2">{blog.bContent}</p>
                                                        <p className="card-text"><small className="text-muted">3 min read</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }                       
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Profile
