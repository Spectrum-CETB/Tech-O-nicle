import React, { Component } from 'react'
import CardButton from '../CardButton'

export class TwoBlog extends Component {
    render() {
        const { img, obj } = this.props;
        let { bName, bContent, bCreator, bTags, createdAt } = obj;
        createdAt = createdAt.substr(0,10);
        bContent = bContent.substr(0,120);
        bContent = bContent.concat("...");
        bTags = bTags.split(",");
        return (
            <div className="col-lg-3 col-md-5 col-sm-6">
                <div className="card mb-1" style={{ backgroundColor: '#F6F6F2' }}>
                    <img className="card-img-top " style={{ borderRadius: "7px", height: '14rem' }} src={img} alt="card-img" />
                    <div className="card-body mx-3">
                        <div className="mb-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <div style={{ backgroundImage: `url(${img})` }} className="imgdivuser me-2"></div>
                            <p className="p-0 m-0" style={{ fontWeight: '500' }}>{bCreator}</p>
                            <p className="p-0 m-0 ms-2" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                        </div>
                        <div className="mb-1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            
                            <div style={{ display: 'inline-block', padding: '3px 8px 3px 6px', backgroundColor: "wheat", borderRadius: '15px' }}>
                                <div className="domain-name1">
                                    <div className="circle11 me-1"></div>
                                    <p className="mb-0 mt-0" style={{ fontSize: '16px', fontWeight: '500' }}>{bTags[0]}</p>
                                </div>
                            </div>
                            <p className="mb-0 mt-0 me-1" style={{ fontWeight: '400' }}>{createdAt}</p>
                        </div>
                        <h5 className="card-title">{bName}</h5>
                        <p className="card-text">{bContent}</p>
                        <CardButton />
                    </div>
                </div>
            </div>
        )
    }
}

export default TwoBlog
