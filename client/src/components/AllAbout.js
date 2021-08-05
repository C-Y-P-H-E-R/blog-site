import React from 'react'
import './css/AllAbout.css'
import Tofollow from './Tofollow'

function AllAbout() {
    return (
        <div className="allabout">
            <h3>RECOMMENDED TOPICS</h3>
            <div className="allabout__tags">
                <button className="tags__btn">React</button>
                <button className="tags__btn">NodeJS</button>
                <button className="tags__btn">Firebase</button>
                <button className="tags__btn">CSS</button>
                <button className="tags__btn">Javascript</button>
            </div>
            <div className="allabout__follows">
                <h3>WHO TO FOLLOW</h3>
                <div className="tofollowlist">
                    <Tofollow />
                    <Tofollow />
                    <Tofollow />
                </div>
            </div>
        </div>
    )
}

export default AllAbout
