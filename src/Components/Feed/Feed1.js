import React from 'react'

function Feed1({ url }) {
    return (
        <div className="content1 container-fluid">

            <img src={url} alt="" />

            <div className="content11">
                <p className="content11p"><span className="liststyle">fullstack</span></p>
                <p style={{color:'white'}}>Lorem ipsum dolor quia quod saepe cum</p>
            </div>
        </div>
    )
}

export default Feed1
