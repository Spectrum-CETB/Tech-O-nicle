import React, { useState } from 'react'
import './Style.css'



function CreateBlog() {
  const [state, setState] = useState({
    tags: {
      Blockchain: false,
      AI: false,
      Fullstack: false,
      PHP: false,
      Kotlin: false,
      ROS: false,
      ML: false,
      MERN: false,
      Flutter: false
    }
  });

  function check(e) {
    var { name, checked } = e.target;

    setState(new_state => ({
      ...new_state,
      tags: {
        ...new_state.tags,
        [name]: checked,
      }
    }))
  };

  var displayTags = Object.keys(state.tags).filter(tag => state.tags[tag]);

  return (
    <div className="bg">
      <div className="container-fluid sb">
        <div className="panel-heading hd"><h3 align="center"> 🖊 CREATE YOUR BLOG! 🖊</h3></div>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-3 attch">
            <h5 className="att mt-2 mt-md-0">ATTACH TAGS: </h5>
            <div className="tag">
              <input type="checkbox" name="AI" onChange={check} /> AI&nbsp;<br />
              <input type="checkbox" name="Blockchain" onChange={check} /> Blockchain&nbsp;<br />
              <input type="checkbox" name="Data Science" onChange={check} /> Data Science&nbsp;<br />
              <input type="checkbox" name="Flutter" onChange={check} /> Flutter&nbsp;<br />
              <input type="checkbox" name="Fullstack" onChange={check} /> Fullstack&nbsp;<br />
              <input type="checkbox" name="iOS" onChange={check} /> iOS&nbsp;<br />
              <input type="checkbox" name="IoT" onChange={check} /> IoT&nbsp;<br />
              <input type="checkbox" name="Javascript" onChange={check} /> Javascript&nbsp;<br />
              <input type="checkbox" name="Kotlin" onChange={check} /> Kotlin&nbsp; <br />
              <input type="checkbox" name="MERN" onChange={check} /> MERN&nbsp;<br />
              <input type="checkbox" name="ML" onChange={check} /> ML&nbsp;<br />
              <input type="checkbox" name="PHP" onChange={check} /> PHP&nbsp;<br />
              <input type="checkbox" name="Reactjs" onChange={check} /> Reactjs&nbsp;<br />
              <input type="checkbox" name="ROS" onChange={check} /> ROS&nbsp;<br />
              <input type="checkbox" name="SQL" onChange={check} /> SQL&nbsp;<br />
              <br />
            </div>

            <h5 className="att mb-3 mt-2">SELECTED TAGS: </h5>
            <div className="displayTags">
              {displayTags.map( (e) => <span key={e} className="badges">{e}</span>)}
            </div>
          </div>

          <div className="col-lg-9 col-md-8 col-sm-9">
            <div className="right">
              <div className="panel panel-default">


                <div className="panel-body">
                  <form className="form-horizontal" method="POST">
                    <div className="form-group">
                      <div className="col-md-12 my-4">
                        <input type="text" className="form-control" name="title" placeholder="Title of your blog..." />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12 my-4">
                        <input type="text" className="form-control" name="creator" placeholder="Creator of the blog..." />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12 my-3">
                        <textarea name="content" className="form-control" cols="30" rows="17" placeholder="Content of your blog..."></textarea>
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-bumton btn-block bumton">
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
  )
}

export default CreateBlog
