import React, { Component } from 'react'

export default class Feeds extends Component {
    render() {
        const { val } = this.props;
        return (
            <div className="row justify-content-center align-items-center">
                <div className="col-md-3 col-lg-2 col-xs-5" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <div className="pe-2 ps-2 p-1 mb-4 mt-1" style={{ backgroundColor: '#388087', borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                        <div /*style={{ backgroundImage: `url(${image})` }} */className="imgdiv me-2"><img src={require(`../images/${val}.webp`).default} alt={val} /></div>
                        <div className="content11">
                            <div style={{ padding: '3px 8px 3px 6px', backgroundColor: "white", borderRadius: '15px' }}>
                                <div className="domain-name1">
                                    <div className="circle11 me-1"></div>
                                    <p className="mb-0 mt-0" style={{ fontSize: '16px', fontWeight: '500' }}>{val}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

