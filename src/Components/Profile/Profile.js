import React, { Component } from 'react';
import './style.css';
import bannerImg from "./banner.webp";
import profile from "./profile.webp";
import blog from "./blog.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export class Profile extends Component {
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
                            <h4>Shreyas Arya</h4>
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

                            {/* blog1 */}
                            <div className="card px-md-3 mt-4">
                                <div className="row align-items-center">
                                    <div className="col-4 col-md-4 col-lg-2">
                                        <img src={blog} alt="blog" className="img-fluid"/>
                                    </div>
                                    <div className="col cards">
                                        <div className="card-body">
                                            <h5 className="card-title">My first Blog</h5>
                                            <p className="card-text mt-2">This is just lorem ipsum dummy text. I forgot how to use lorem ipsum, so i am typing this much. This is so repetitive. But i have to fill this space, what to do. Help me!!!</p>
                                            <p className="card-text"><small className="text-muted">3 min read</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* blog1 ends */}                           
                            {/* blog2 */}
                            <div className="card px-md-3 mt-4">
                                <div className="row align-items-center">
                                    <div className="col-4 col-md-4 col-lg-2">
                                        <img src={blog} alt="blog" className="img-fluid"/>
                                    </div>
                                    <div className="col cards">
                                        <div className="card-body">
                                            <h5 className="card-title">My second Blog</h5>
                                            <p className="card-text mt-2">This is just lorem ipsum dummy text. I forgot how to use lorem ipsum, so i am typing this much. This is so repetitive. But i have to fill this space, what to do. Help me!!!</p>
                                            <p className="card-text"><small className="text-muted">3 min read</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* blog2 ends */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Profile
