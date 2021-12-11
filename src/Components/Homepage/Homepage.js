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
                          <p className="p-0 m-0 ms-2 p" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span class="list">4 min read</span></p>
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
                          <p className="p-0 m-0 ms-2 p" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span class="list">4 min read</span></p>
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
                          <p className="p-0 m-0 ms-2 p" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span class="list">4 min read</span></p>
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
                          <p className="p-0 m-0 ms-2 p" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span class="list">4 min read</span></p>
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
                          <p className="p-0 m-0 ms-2 p" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span class="list">4 min read</span></p>
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
                          <p className="p-0 m-0 ms-2 p" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span class="list">4 min read</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <section id="about">
<div class="about_sec">
  <div class="abt row p-5 align-items-center justify-content-between">
    <div class="col-md">
      <img class="abt-img img-fluid" src={sitting} alt=""></img>
    </div>
    <div class="abt-text col-md px-5">
      <h2>Who We Are </h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, id repudiandae tempora dignissimos nisi vitae sed harum tempore illo quod amet? Nobis, voluptatem numquam delectus quia sunt, cum quas at, voluptates maiores eum repellat doloremque voluptatibus. Ratione atque laboriosam totam!</p><br/>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quas, saepe corporis sunt a eum neque iusto nemo natus.</p><br/>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, eaque voluptatum, harum aut laboriosam accusamus sunt fugit dolorem facilis eius ratione, asperiores necessitatibus. Assumenda voluptates nihil, nulla quas ea corporis?</p><br/>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dicta veniam quaerat inventore, tempora pariatur quas, dignissimos alias cupiditate ducimus modi repudiandae repellat assumenda aliquam.</p><br/>

    </div>

  </div>

</div>
</section>

<section class="contact mb-4">

    
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="info row">     
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" >               
             <div class="row">
                    <div class="send-con col-md-6">
                        <div class="md-form mb-0">
                          <label for="name" class="">Your name</label>
                          <input type="text" id="name" name="name" class="form-control"></input>
                        </div>
                    </div>
                   
                    <div class="send-con col-md-6">
                        <div class="md-form mb-0">
                          <label for="email" class="">Your email</label>
                          <input type="text" id="email" name="email" class="form-control"></input>                           
                        </div>
                    </div>
                  

                </div>
               
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Subject</label>
                            <input type="text" id="subject" name="subject" class="form-control"></input>
                        </div>
                    </div>
                </div>
              
                <div class="row">    
                    <div class="col-md-12">
                        <div class="md-form">
                            <label for="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>                            
                        </div>

                    </div>
                </div>
               

            </form>

            <div class="send text-center text-md-left">
                <a href="#" class="sendbtn p-2 mx-7">Send</a>
            </div>
          
        </div>
      
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>OUTR BBSR</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+xx xxx xxxx xxx</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
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