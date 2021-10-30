import React, { Component } from 'react'

export default class Article extends Component {
    render() {
        return (
            <div className="mb-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-evenly', flexDirection: 'column' }}>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit error provident voluptatibus obcaecati ullam alias.</h5>
                    <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <div style={{ backgroundImage: `url(${this.props.profilepic})` }} className="imgdivuser me-2"></div>
                        <p className="p-0 m-0" style={{ fontWeight: '500' }}>User name</p>
                        <p className="p-0 m-0 ms-2" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                        {/* <p className="p-0 m-0 ms-0" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">01/01/2021</span></p> */}
                    </div>
                </div>
                <div style={{ height: '15vh' }}>
                    <div className="imgdivarticles" style={{ backgroundImage: `url(${this.props.articlepic})` }}></div>
                </div>
            </div>
        )
    }
}
