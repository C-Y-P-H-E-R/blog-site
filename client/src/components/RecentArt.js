import React from 'react'
import './css/RecentArt.css'

function RecentArt() {
    return (
        <div className="recentart">
            <div className="recentart__post__info">
                <h3>Kushagra prepared the Clone for netflix.</h3>
                <h5>this is the description for the post</h5>
                <div className="toolbar">
                    <p>date/time</p>
                    <button className="toolbar__tag">development</button>
                    <button className="trans"><i className="fa fa-bookmark"></i></button>
                    <button className="trans"><i className="fa fa-ellipsis-h"></i></button>
                </div>
            </div>
            <img src="https://ksworks.netlify.app/images/Nflix.png" alt="not found"/>
        </div>
    )
}

export default RecentArt
