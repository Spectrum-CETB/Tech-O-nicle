import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Img from "./images/specificblog.png";
//import fb from './images/fb.png'
import "./Style.css";
import axios from "axios";

function SpecificBlog() {
  let { blogId } = useParams();

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get("https://spectrumoutr.com/techonicle/getBlog.php?id=" + blogId)
      .then((res) => {
        if (res.data.status) {
          setBlog(res.data.blogs[0]);
        } else {
          console.log("Unable to fetch the blog!");
        }
      })
      .catch(console.error());
  }, []);

  console.log(blog);
  return (
    <>
      <div className="container-fluid sb">
        <div className="row spcfcblog">
          <div className="col-lg-9 col-md-8 bimg">
            <img className="img-fluid spimg " src={Img} alt="" />
            <div className="domains">
              <div className="time">
                <h4>4 min read</h4>
              </div>
              <div className="domain-name">
                <div className="circle1"></div>
                <h4>Coding</h4>
              </div>
              <div className="domain-name">
                <div className="circle2"></div>
                <h4>Creativity</h4>
              </div>
              <div className="domain-name">
                <div className="circle3"></div>
                <h4>Technology</h4>
              </div>
              <div className="date">
                <h4>Wed 22 Sept, 2021</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 pfsection">
            <img
              className="img-fluid pimg mrg-left"
              src="https://i.guim.co.uk/img/media/fd9b9ed4d416bd1867fe356e49975b9527c26765/0_59_2588_1553/master/2588.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9524bc6ee58b97a7230c38228afaecec"
              alt=""
            />

            <h2 className="wname mrg-left">{blog.bCreator}</h2>
            <div className="mediaicons ">
              <i className="fab fa fa-facebook-f hh"></i>
              <i className="fab fa-linkedin-in hh"></i>
              <i className="fab fa-instagram hh"></i>
              <i className="fab fa-twitter hh"></i>
            </div>
            <button className="follow mrg-left">Follow</button>
            <div className="quote">
              <h1>"I have the power to develop a better you.."</h1>
            </div>
          </div>
        </div>
        <div className="content">
          <h2>{blog.bName}</h2>
          <p>{blog.bContent}</p>
        </div>
      </div>
    </>
  );
}

export default SpecificBlog;
