import React, { Component } from 'react'

export default class slidecard extends Component {
    render() {
        return (
            <div className="row justify-content-center">
            <div className="col-sm-11 col-xs-12 col-md-11">
                <div className="slidecard" style={{ backgroundImage: `url(${this.props.image})` }} >
                    <div className="slidecardcontent mb-2">
                        <span style={{display:'inline-block'}}><p className="content11p"><span className="liststyle">fullstack</span></p></span>
                        <h5 style={{color:'white'}} className="mb-2 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                        <p style={{color:'white',display:'list-item',listStyleType:'disc',listStylePosition:'inside'}}><span className="liststyle">4 min read</span></p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

