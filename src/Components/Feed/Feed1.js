import React, { Component } from 'react'

export default class Feed1 extends Component {
    render() {
        return (
            <div className="content1 container-fluid">

            <img src={this.props.url} alt="" />

            <div className="content11">
                <p className="content11p"><span className="liststyle">fullstack</span></p>
                <p style={{color:'white'}}>Lorem ipsum dolor quia quod saepe cum</p>
            </div>
            </div>
        )
    }
}

