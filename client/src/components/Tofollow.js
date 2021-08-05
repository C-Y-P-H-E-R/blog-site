import React from 'react'
import './css/Tofollow.css'
import women_blog from '../Images/women_blog.png'

// https://static.toiimg.com/thumb/71971374.cms?width=680&height=512&imgsize=1589865

function Tofollow() {
    return (
        <div className="tofollow">
            <img src={women_blog} alt="issue"/>
            <div className="tofollow__info">
                <h4>Rachael Knitberg</h4>
                <p>Oh! this is my life.My wonderful life!</p>
            </div>
            <button className="tofollow__button">Follow</button>
        </div>
    )
}

export default Tofollow
