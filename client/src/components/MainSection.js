import React from 'react'
import './css/MainSection.css'
import AllAbout from './AllAbout'
import RecentArt from './RecentArt'
import { Link, Route, BrowserRouter as Router , Switch } from 'react-router-dom'

function MainSection() {
    return (
            
                <div className="mainsection">
                    <div className="mainsection__recents">
                        <Router>
                            <div className="sub__navbar">
                                <Link className = "subnav__styling" style={{"textDecoration": "none", "color": "black"}} to="/following"><h4>Following</h4></Link>
                                <Link className = "subnav__styling" style={{"textDecoration": "none", "color": "black"}} to="/recommended"><h4>Recommended</h4></Link>
                            </div>
                            <Switch>
                                <Route exact path="/recommended">
                                    <RecentArt />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                    <AllAbout />
                </div>
            
    )
}
export default MainSection
