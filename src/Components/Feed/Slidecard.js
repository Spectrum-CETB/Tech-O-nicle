import React, { Component } from 'react'

export default class slidecard extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-sm-11 col-xs-12 col-md-11">
                    <div className="slidecard" style={{ backgroundImage: `url(${this.props.image})`}} >
                        <div className="slidecardcontent mb-2">
                            <div style={{ padding: '3px 8px 3px 6px', backgroundColor: "white", borderRadius: '15px',display:'inline-block' }}>
                                <div className="domain-name1">
                                    <div className="circle11 me-1"></div>
                                    <p className="mb-0 mt-0" style={{ fontSize: '16px', fontWeight: '500' }}>Fullstack</p>
                                </div>
                            </div>
                            <h5 style={{ color: 'white' }} className="mb-2 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                            <p style={{ color: 'white', display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

