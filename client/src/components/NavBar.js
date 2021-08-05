import React from 'react'
import './css/Navbar.css'

function NavBar() {
    return (
        <div className="navbar">
            <h2>Blog</h2>
            <div className="navbar__login">
                <button className="btn btn-in">SignIn</button>
                <button className="btn btn-up">SignUp</button>
            </div>
        </div>
    )
}

export default NavBar
