// import React from 'react'
import React, { Component } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Feed1 from './Feed1'
import './style.css'
import image from './download.jpg'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import Slidecard from './Slidecard';
import CardButton from './CardButton';
import Article from './Article';

export default class Feed extends Component {
    render() {
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 1200 },
                items: 4
            },
            desktop: {
                breakpoint: { max: 1200, min: 768 },
                items: 3
            },
            tablet: {
                breakpoint: { max: 768, min: 550 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 550, min: 0 },
                items: 1
            }
        };
        return (
            <div style={{ backgroundColor: '#F6F6F2' }}>
                <div style={{ backgroundColor: 'wheat' }} className="pb-2 pt-2">
                    <div className="mb-0 pe-4" style={{ padding: '0px 15px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div className="live mt-1 mb-0 ms-2">
                            <h3 className="m-0 mb-1">Trending Topics</h3>
                        </div>
                        <a style={{ textDecoration: 'none', fontWeight: '500', fontSize: '1.1rem' }} className="m-0 button11" href="/#">view all</a>
                    </div>
                    <Carousel
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        infinite={true}
                        centerMode={false}
                        showDots={true}
                        arrows
                        slidesToSlide={1}
                        removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
                        //itemClass="image-item"
                        responsive={responsive}
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                    >

                        <Feed1 url={image} />
                        <Feed1 url={image1} />
                        <Feed1 url={image3} />
                        <Feed1 url={image4} />
                        <Feed1 url={image2} />

                    </Carousel>
                </div>

                <div className="container-fluid mt-4">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-3 col-md-5 col-sm-6">
                            <div className="card mb-1" style={{ backgroundColor: '#F6F6F2' }}>
                                <img className="card-img-top" style={{ borderRadius: "7px", height: '14rem' }} src={image} alt="card-img" />
                                <div className="card-body">
                                    <div className="mb-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <div style={{ backgroundImage: `url(${image})` }} className="imgdivuser me-2"></div>
                                        <p className="p-0 m-0" style={{ fontWeight: '500' }}>User name</p>
                                        <p className="p-0 m-0 ms-2" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                                    </div>
                                    <div className="mb-1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'inline-block', padding: '3px 8px 3px 6px', backgroundColor: "wheat", borderRadius: '15px' }}>
                                            <div className="domain-name1">
                                                <div className="circle11 me-1"></div>
                                                <p className="mb-0 mt-0" style={{ fontSize: '16px', fontWeight: '500' }}>Fullstack</p>
                                            </div>
                                        </div>
                                        <p className="mb-0 mt-0 me-1" style={{ fontWeight: '400' }}>November 1,2021</p>
                                    </div>
                                    <h5 className="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    {/* <p style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p> */}
                                    <CardButton />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-6">
                            <div className="card mb-1" style={{ backgroundColor: '#F6F6F2' }}>
                                <img className="card-img-top" style={{ borderRadius: "7px", height: '14rem' }} src={image4} alt="card-img" />
                                <div className="card-body">
                                    <div className="mb-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <div style={{ backgroundImage: `url(${image})` }} className="imgdivuser me-2"></div>
                                        <p className="p-0 m-0" style={{ fontWeight: '500' }}>User name</p>
                                        <p className="p-0 m-0 ms-2" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                                    </div>
                                    <div className="mb-1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'inline-block', padding: '3px 8px 3px 6px', backgroundColor: "wheat", borderRadius: '15px' }}>
                                            <div className="domain-name1">
                                                <div className="circle11 me-1"></div>
                                                <p className="mb-0 mt-0" style={{ fontSize: '16px', fontWeight: '500' }}>Fullstack</p>
                                            </div>
                                        </div>
                                        <p className="mb-0 mt-0 me-1" style={{ fontWeight: '400' }}>November 1,2021</p>
                                    </div>
                                    <h5 className="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    {/* <p style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p> */}
                                    <CardButton />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12 content2div">
                            <div className="content2">
                                <div className="mb-2" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3>Popular Articles</h3>
                                    <a style={{ textDecoration: 'none', fontWeight: '500', fontSize: '1.2rem' }} className="button1 m-0" href="/#">view all</a>
                                </div>
                                <div className="content21 mb-3">
                                    <h5 className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                    <p className="mb-0 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis necessitatibus.</p>
                                    <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <div style={{ backgroundImage: `url(${image})` }} className="imgdivuser me-2"></div>
                                        <p className="p-0 m-0" style={{ fontWeight: '500' }}>User name</p>
                                        <div className="ms-2" style={{ display: 'inline-block', padding: '3px 8px 3px 6px', backgroundColor: "wheat", borderRadius: '15px' }}>
                                            <div className="domain-name1">
                                                <div className="circle11 me-1"></div>
                                                <p className="mb-0 mt-0" style={{ fontSize: '16px', fontWeight: '500' }}>Design</p>
                                            </div>
                                        </div>
                                        <p className="p-0 m-0 ms-2" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                                    </div>
                                </div>
                                <div className="content21 mb-3">
                                    <h5 className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                    <p className="mb-0 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis necessitatibus.</p>
                                    <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <div style={{ backgroundImage: `url(${image})` }} className="imgdivuser me-2"></div>
                                        <p className="p-0 m-0" style={{ fontWeight: '500' }}>User name</p>
                                        <div className="ms-2" style={{ display: 'inline-block', padding: '3px 8px 3px 6px', backgroundColor: "wheat", borderRadius: '15px' }}>
                                            <div className="domain-name1">
                                                <div className="circle11 me-1"></div>
                                                <p className="mb-0 mt-0" style={{ fontSize: '16px', fontWeight: '500' }}>Design</p>
                                            </div>
                                        </div>
                                        <p className="p-0 m-0 ms-2" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                                    </div>
                                </div>
                                <div className="content21 mb-3">
                                    <h5 className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                    <p className="mb-0 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis necessitatibus.</p>
                                    <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <div style={{ backgroundImage: `url(${image})` }} className="imgdivuser me-2"></div>
                                        <p className="p-0 m-0" style={{ fontWeight: '500' }}>User name</p>
                                        <div className="ms-2" style={{ display: 'inline-block', padding: '3px 8px 3px 6px', backgroundColor: "wheat", borderRadius: '15px' }}>
                                            <div className="domain-name1">
                                                <div className="circle11 me-1"></div>
                                                <p className="mb-0 mt-0" style={{ fontSize: '16px', fontWeight: '500' }}>Design</p>
                                            </div>
                                        </div>
                                        <p className="p-0 m-0 ms-2" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-10 col-sm-12 mb-3 content22div">
                            <div className="content2 mt-2">
                                <div className="mb-2" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3>Popular Articles</h3>
                                    <a style={{ textDecoration: 'none', fontWeight: '500', fontSize: '1.2rem' }} className="m-0 button1" href="/#">view all</a>
                                </div>
                                <div className="content21 mb-3 p-1" style={{background: 'white', borderRadius: '10px' }}>
                                    <h5 className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                    <p className="mb-0 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis necessitatibus.</p>
                                    <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <div style={{ backgroundImage: `url(${image})` }} className="imgdivuser me-2"></div>
                                        <p className="p-0 m-0" style={{ fontWeight: '500' }}>User name</p>
                                        <div className="ms-2" style={{ display: 'inline-block', padding: '3px 8px 3px 6px', backgroundColor: "wheat", borderRadius: '15px' }}>
                                            <div className="domain-name1">
                                                <div className="circle11 me-1"></div>
                                                <p className="mb-0 mt-0" style={{ fontSize: '16px', fontWeight: '500' }}>Design</p>
                                            </div>
                                        </div>
                                        <p className="p-0 m-0 ms-2" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                                    </div>
                                </div>
                                <div className="content21 mb-3 p-1" style={{ background: 'white', borderRadius: '10px' }}>
                                    <h5 className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                    <p className="mb-0 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis necessitatibus.</p>
                                    <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <div style={{ backgroundImage: `url(${image})` }} className="imgdivuser me-2"></div>
                                        <p className="p-0 m-0" style={{ fontWeight: '500' }}>User name</p>
                                        <div className="ms-2" style={{ display: 'inline-block', padding: '3px 8px 3px 6px', backgroundColor: "wheat", borderRadius: '15px' }}>
                                            <div className="domain-name1">
                                                <div className="circle11 me-1"></div>
                                                <p className="mb-0 mt-0" style={{ fontSize: '16px', fontWeight: '500' }}>Design</p>
                                            </div>
                                        </div>
                                        <p className="p-0 m-0 ms-2" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                                    </div>
                                </div>
                                <div className="content21 mb-3 p-1" style={{ background: 'white', borderRadius: '10px' }}>
                                    <h5 className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                    <p className="mb-0 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis necessitatibus.</p>
                                    <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <div style={{ backgroundImage: `url(${image})` }} className="imgdivuser me-2"></div>
                                        <p className="p-0 m-0" style={{ fontWeight: '500' }}>User name</p>
                                        <div className="ms-2" style={{ display: 'inline-block', padding: '3px 8px 3px 6px', backgroundColor: "wheat", borderRadius: '15px' }}>
                                            <div className="domain-name1">
                                                <div className="circle11 me-1"></div>
                                                <p className="mb-0 mt-0" style={{ fontSize: '16px', fontWeight: '500' }}>Design</p>
                                            </div>
                                        </div>
                                        <p className="p-0 m-0 ms-2" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="content2767 mt-4 mb-4" style={{ background: '#388087' }}>
                            <div className="content21 mt-2 mb-2">

                                <h5 className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>

                                <p style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                            </div>
                            <div className="content21">
                                <h5 className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>

                                <p style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                            </div>
                        </div>
                        <div className="content2g767 mt-4 mb-4" style={{ background: '#388087' }}>
                            <div className="content21 mt-3 mb-3">
                                <h5 className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>

                                <p style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                            </div>
                            <div className="content21">
                                <h5 className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>

                                <p style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                            </div>
                            <div className="content21">
                                <h5 className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>

                                <p style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                            </div>
                        </div> */}
                    </div>
                    <div className="container-fluid mb-4">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-8 col-md-10 p-0">
                                <Article profilepic={image1} articlepic={image} />
                                <Article profilepic={image3} articlepic={image2} />
                                <Article profilepic={image4} articlepic={image1} />
                                <div style={{ textAlign: 'center' }}>
                                    <a href="/#"><button className="button">View All Articles</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 pe-4" style={{ padding: '0px 15px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div className="live mt-1 mb-0 ms-1">
                            <h3 className="m-0 mb-1">Trending</h3>
                        </div>
                        <div>
                            <a href="/#"><button className="button1">View All</button></a>
                        </div>
                    </div>
                    <Carousel
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        infinite={true}
                        centerMode={false}
                        arrows
                        slidesToSlide={1}
                        //itemClass="image-item"
                        responsive={responsive}
                        //removeArrowOnDeviceType={["tablet", "mobile"]}
                        className="mb-4">
                        <Slidecard image={image4} />
                        <Slidecard image={image1} />
                        <Slidecard image={image2} />
                        <Slidecard image={image4} />
                        <Slidecard image={image3} />
                        <Slidecard image={image} />
                    </Carousel>
                </div>
            </div>
        )
    }
}

