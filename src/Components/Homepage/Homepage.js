import React, { Component } from 'react';
import banner from './banner-image.png'
import sitting from './sitting1.png'
import page_end from './page-end.png'
import './Style.css';
import { Link, Redirect } from 'react-router-dom';

export class Homepage extends Component {
    render() {
        if(sessionStorage.getItem("user")) {
         return(
             <Redirect to = {'/dashboard'}/>
          )
        } else {
          return (
    
            
          <><div className="banner text-center mt-5">
            <div className="bundle">
              <div className="d-md-flex align-items-center justify-content-between">
                <div className="banner-text">
                  <h1>Techonicle - A Place to read,write,learn and explore tech </h1><br />
                  <h4>On any tech domains you can think about!</h4><br />
                  <Link to='/dashboard'><button className="xplr">Start Writing</button></Link>
                </div>
                <img className="img-fluid d-sm-block" src={banner} alt="banner"></img>
              </div>
            </div>

            <section className="trending">
              <p className="b_title p">#Trending Today</p>
              <div className="horizontal row px-5 pt-5 pb-2">

                <div className="col-md-4">
                  <div className=" trend-blog p-1">
                    <div className="mb-2" style={{ display: 'flex', flexDirection: 'row', padding: '10px', textAlign: 'justify', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
                        <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit error provident voluptatibus obcaecati ullam alias.</h5>
                        <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                          <div className="blog me-2"></div>
                          <p className="p-0 m-0 p" style={{ fontWeight: '500' }}>Oct 30</p>
                          <p className="p-0 m-0 ms-2 p" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="list">4 min read</span></p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
                <div className="col-md-4">
                  <div className="p-1 trend-blog ">
                    <div className="pt-2 mb-2" style={{ display: 'flex', flexDirection: 'row', padding: '10px', textAlign: 'justify', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
                        <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit error provident voluptatibus obcaecati ullam alias.</h5>
                        <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                          <div className="blog me-2"></div>
                          <p className="p-0 m-0 p" style={{ fontWeight: '500' }}>Oct 30</p>
                          <p className="p-0 m-0 ms-2 p" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="list">4 min read</span></p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
                <div className="col-md-4">
                  <div className="p-1 trend-blog ">
                    <div className="mb-2" style={{ display: 'flex', flexDirection: 'row', padding: '10px', textAlign: 'justify', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
                        <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit error provident voluptatibus obcaecati ullam alias.</h5>
                        <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                          <div className="blog me-2"></div>
                          <p className="p-0 m-0 p" style={{ fontWeight: '500' }}>Oct 30</p>
                          <p className="p-0 m-0 ms-2 p" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="list">4 min read</span></p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
           
              <div className="horizontal row px-5 pb-5">
                <div className="col-md-4">
                  <div className="p-1 trend-blog ">
                    <div className="mb-2" style={{ display: 'flex', flexDirection: 'row', padding: '10px', textAlign: 'justify', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
                        <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit error provident voluptatibus obcaecati ullam alias.</h5>
                        <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                          <div className="blog me-2"></div>
                          <p className="p-0 m-0 p" style={{ fontWeight: '500' }}>Oct 30</p>
                          <p className="p-0 m-0 ms-2 p" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="list">4 min read</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="p-1 trend-blog ">
                    <div className="mb-2" style={{ display: 'flex', flexDirection: 'row', padding: '10px', textAlign: 'justify', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
                        <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit error provident voluptatibus obcaecati ullam alias.</h5>
                        <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                          <div className="blog me-2"></div>
                          <p className="p-0 m-0 p" style={{ fontWeight: '500' }}>Oct 30</p>
                          <p className="p-0 m-0 ms-2 p" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="list">4 min read</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="p-1 trend-blog ">
                    <div className="mb-2" style={{ display: 'flex', flexDirection: 'row', padding: '10px', textAlign: 'justify', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
                        <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit error provident voluptatibus obcaecati ullam alias.</h5>
                        <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                          <div className="blog me-2"></div>
                          <p className="p-0 m-0 p" style={{ fontWeight: '500' }}>Oct 30</p>
                          <p className="p-0 m-0 ms-2 p" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="list">4 min read</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <section id="about">
<div className="about_sec">
  <div className="abt row p-5 align-items-center justify-content-between">
    <div className="col-md">
      <img className="abt-img img-fluid" src={sitting} alt=""></img>
    </div>
    <div className="abt-text col-md px-5">
      <h2>Who We Are </h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, id repudiandae tempora dignissimos nisi vitae sed harum tempore illo quod amet? Nobis, voluptatem numquam delectus quia sunt, cum quas at, voluptates maiores eum repellat doloremque voluptatibus. Ratione atque laboriosam totam!</p><br/>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quas, saepe corporis sunt a eum neque iusto nemo natus.</p><br/>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, eaque voluptatum, harum aut laboriosam accusamus sunt fugit dolorem facilis eius ratione, asperiores necessitatibus. Assumenda voluptates nihil, nulla quas ea corporis?</p><br/>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dicta veniam quaerat inventore, tempora pariatur quas, dignissimos alias cupiditate ducimus modi repudiandae repellat assumenda aliquam.</p><br/>

    </div>

  </div>

</div>
</section>

<section className="contact mb-4">

    
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="info row">     
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" >               
             <div className="row">
                    <div className="send-con col-md-6">
                        <div className="md-form mb-0">
                          <label htmlFor="name" className="">Your name</label>
                          <input type="text" id="name" name="name" className="form-control"></input>
                        </div>
                    </div>
                   
                    <div className="send-con col-md-6">
                        <div className="md-form mb-0">
                          <label htmlFor="email" className="">Your email</label>
                          <input type="text" id="email" name="email" className="form-control"></input>                           
                        </div>
                    </div>
                  

                </div>
               
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <label htmlFor="subject" className="">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control"></input>
                        </div>
                    </div>
                </div>
              
                <div className="row">    
                    <div className="col-md-12">
                        <div className="md-form">
                            <label htmlFor="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>                            
                        </div>

                    </div>
                </div>
               

            </form>

            <div className="send text-center text-md-left">
                <button className="sendbtn p-2 mx-7">Send</button>
            </div>
          
        </div>
      
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>OUTR BBSR</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+xx xxx xxxx xxx</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>123@abc.com</p>
                </li>
            </ul>
        </div>
       

    </div>

</section>


          <img className="last_img img-fluid rounded mx-auto d-sm-block" src={page_end} alt="indicator"></img></>

          
       
        )
        }
        
    }
}

export default Homepage