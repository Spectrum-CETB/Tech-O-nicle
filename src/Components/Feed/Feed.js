import React from 'react'
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

function Feed() {
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
        <>
            <div className="container-fluid maincontainer">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 h">
                        <Feed1 url={image} />
                    </div>
                    <div className="col-md-6 hh">
                        <Feed1 url={image} />
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4 col-sm-6">
                        <div className="card">
                            <img src={image} alt="card-img" />
                            <div className="card-body">
                                <h5 className="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p style={{display:'list-item',listStyleType:'disc',listStylePosition:'inside'}}><span className="liststyle">4 min read</span></p>
                                <CardButton/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card">
                            <img src={image} alt="card-img" />
                            <div className="card-body">
                                <h5 className="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p style={{display:'list-item',listStyleType:'disc',listStylePosition:'inside'}}><span className="liststyle">4 min read</span></p>
                                <CardButton/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 content2div">
                        <div className="content2">
                            <div className="content21 mb-3">
                                <h5 className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis necessitatibus.</p>
                                <p style={{display:'list-item',listStyleType:'disc',listStylePosition:'inside'}}><span className="liststyle">4 min read</span></p>
                            </div>
                            <div className="content21 mt-3">
                                <h5 className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis necessitatibus.</p>
                                <p style={{display:'list-item',listStyleType:'disc',listStylePosition:'inside'}}><span className="liststyle">4 min read</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="content2767 mt-4 mb-4" style={{ background: '#388087' }}>
                        <div className="content21 mt-2 mb-2">
                  
                            <h5 className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>

                            <p style={{display:'list-item',listStyleType:'disc',listStylePosition:'inside'}}><span className="liststyle">4 min read</span></p>
                        </div>
                        <div className="content21">
                            <h5 className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>

                            <p style={{display:'list-item',listStyleType:'disc',listStylePosition:'inside'}}><span className="liststyle">4 min read</span></p>
                        </div>
                    </div>
                    <div className="content2g767 mt-4 mb-4" style={{ background: '#388087' }}>
                        <div className="content21 mt-3 mb-3">
                            <h5 className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>

                            <p style={{display:'list-item',listStyleType:'disc',listStylePosition:'inside'}}><span className="liststyle">4 min read</span></p>
                        </div>
                        <div className="content21">
                            <h5 className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>

                            <p style={{display:'list-item',listStyleType:'disc',listStylePosition:'inside'}}><span className="liststyle">4 min read</span></p>
                        </div>
                        <div className="content21">
                            <h5 className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>

                            <p style={{display:'list-item',listStyleType:'disc',listStylePosition:'inside'}}><span className="liststyle">4 min read</span></p>
                        </div>
                    </div>
                </div>
                <Carousel responsive={responsive}
                infinite={true}
                autoPlay={ true }
                autoPlaySpeed={10000}
                transitionDuration={5000}
                swipeable={true}
                showDots={false}
                 className="mb-4">
                    <Slidecard image={image4}/>
                    <Slidecard image={image1}/>
                    <Slidecard image={image2}/>
                    <Slidecard image={image4}/>
                    <Slidecard image={image3}/>
                    <Slidecard image={image}/>
                </Carousel>
            </div>
        </>
    )
}

export default Feed
