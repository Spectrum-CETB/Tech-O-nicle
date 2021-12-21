import React, { Component } from 'react'

export default class Article extends Component {
    render() {
        const { profilePic, articlePic, obj } = this.props;
        let { bName, bContent, bCreator, bTags, createdAt } = obj;
        createdAt = createdAt.substr(0,10);
        bContent = bContent.substr(0,200);
        bContent = bContent.concat("...");
        bTags = bTags.split(",");
        return (
            <div className="mb-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                <div className="pt-2"style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-evenly', flexDirection: 'column' }}>
                    <h5 className="mb-0">{bName}</h5>
                    <p className="mb-0 mt-1">{bContent}</p>
                    <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <div style={{ backgroundImage: `url(${profilePic})` }} className="imgdivuser me-2"></div>
                        <p className="p-0 m-0" style={{ fontWeight: '500' }}>{bCreator}</p>
                        <div className="ms-2" style={{ display: 'inline-block', padding: '3px 8px 3px 6px', backgroundColor: "wheat", borderRadius: '15px' }}>
                            <div className="domain-name1">
                                <div className="circle11 me-1"></div>
                                <p className="mb-0 mt-0" style={{ fontSize: '16px', fontWeight: '500' }}>{bTags[0]}</p>
                            </div>
                        </div>
                        <p className="p-0 m-0 ms-2" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">4 min read</span></p>
                        <p className="p-0 m-0 ms-0" style={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}><span className="liststyle">{createdAt}</span></p>
                    </div>
                </div>
                <div style={{ height: '15vh' }}>
                    <div className="imgdivarticles" style={{ backgroundImage: `url(${articlePic})` }}></div>
                </div>
            </div>
        )
    }
}
