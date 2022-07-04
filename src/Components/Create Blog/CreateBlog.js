import React, { useState } from "react";
import "./Style.css";
import axios from "axios";

function CreateBlog() {
  const [state, setState] = useState({
    tags: {
      HTML: false,
      CSS: false,
      Javascript: false,
      Typescript: false,
      Blockchain: false,
      Reactjs: false,
      Angular: false,
      Vue: false,
      PHP: false,
      NodeJS: false,
      Django: false,
      Flask: false,
      MySQL: false,
      MongoDB: false,
      ML: false,
      IOT: false,
      AI: false,
      OpenCV: false,
      Flutter: false,
      Java: false,
      ROS: false,
      DataScience: false,
      Arduino: false,
      RaspberryPI: false,
      Design: false,
      GameDEV: false,
    },
  });

  const keys = Object.keys(state.tags);

  const [blog, setBlog] = useState({
    title: "",
    creator: "",
    content: "",
    image: null,
  });

  const clearState = () => {
    setBlog({ ...blog, title: "", creator: "", content: "" });
    Object.keys(state.tags).map(
      (k) => (document.getElementsByName(k)[0].checked = false)
    );
    keys.map((k) =>
      setState((new_state) => ({
        ...new_state,
        tags: {
          ...new_state.tags,
          [k]: false,
        },
      }))
    );
  };

  function check(e) {
    var { name, checked } = e.target;

    setState((new_state) => ({
      ...new_state,
      tags: {
        ...new_state.tags,
        [name]: checked,
      },
    }));
  }

  const blogForm = document.getElementById("blogForm");
  const createBlogForm = (e) => {
    e.preventDefault();

    let tags = displayTags.join();
    const formdata = new FormData(blogForm);
    formdata.append("bTags", tags);
    axios
      .post("https://spectrumoutr.com/techonicle/postBlog.php", formdata)
      .then((res) => {
        if (res.data.status === true) {
          clearState();
        }
        alert(
          res.data.status + ", " + res.data.response + ", " + res.data.bImg
        );
      })
      .catch((err) => console.log(err));
  };

  var displayTags = Object.keys(state.tags).filter((tag) => state.tags[tag]);

  return (
    <div className="container-fluid bg">
      <div className="container-fluid">
        <div className="panel-heading hd pt-4 pb-1">
          <h3 align="center"> 🖊 CREATE YOUR BLOG! 🖊</h3>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-5 attch">
            <h5 className="att mt-2 mt-md-0 py-2 pt-md-4">ATTACH TAGS: </h5>
            <div className="tag row">
              {Object.keys(state.tags).map((e) => {
                return (
                  <div className="col-6" key={e}>
                    <input type="checkbox" name={e} onChange={check} />
                    &nbsp;&nbsp;{e}
                    <br />
                  </div>
                );
              })}
              <br />
            </div>

            <h5 className="att my-2 pt-2">SELECTED TAGS: </h5>
            <div className="displayTags mb-3" id="displayTags">
              {displayTags.map((e) => {
                return (
                  <span key={e} className="badges">
                    {e}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="col-lg-9 col-md-7">
            <div className="right">
              <div className="panel panel-default">
                <div className="panel-body px-2 px-lg-5">
                  <form
                    className="form-horizontal"
                    method="POST"
                    onSubmit={createBlogForm}
                    id="blogForm"
                  >
                    <div className="form-group">
                      <div className="col-md-12 my-3">
                        <input
                          type="text"
                          className="form-control"
                          name="bName"
                          placeholder="Title of your blog..."
                          onChange={(e) =>
                            setBlog({ ...blog, title: e.target.value })
                          }
                          value={blog.title}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12 my-3">
                        <input
                          type="text"
                          className="form-control"
                          name="bCreator"
                          placeholder="Creator of the blog..."
                          onChange={(e) =>
                            setBlog({ ...blog, creator: e.target.value })
                          }
                          value={blog.creator}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12 my-3">
                        <textarea
                          name="bContent"
                          className="form-control"
                          cols="30"
                          rows="14"
                          placeholder="Content of your blog..."
                          onChange={(e) =>
                            setBlog({ ...blog, content: e.target.value })
                          }
                          value={blog.content}
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group uploadImage">
                      <div className="row align-items-center">
                        <div className="col-4 mt-1 mt-md-0 text-center">
                          <h4>Select Blog Image:</h4>
                        </div>
                        <div className="col-8 my-3 text-center">
                          <input
                            type="file"
                            name="bImage"
                            accept=".jpg, .png .jpeg .webp"
                            onChange={(e) =>
                              setBlog({ ...blog, image: e.target.files[0] })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <button
                        type="submit"
                        className="btn btn-bumton btn-block bumton mb-3"
                      >
                        <i className="fa fa-btn fa-user"></i> Publish
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
