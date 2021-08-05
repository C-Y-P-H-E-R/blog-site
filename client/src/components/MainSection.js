import React from 'react'
import './css/MainSection.css'
import RecentArt from './RecentArt'
import AllAbout from './AllAbout'

function MainSection() {
    return (
        <div className="mainsection">
                <div className="mainsection__recents">
                    <div className="sub__navbar">
                        <h4>Following</h4>
                        <h4>Recommended</h4>
                    </div>
                    <RecentArt />
                    <RecentArt />
                    <RecentArt />
                    <RecentArt />
                    <RecentArt />
                </div>
                <AllAbout />
        </div>
    )
}
export default MainSection
