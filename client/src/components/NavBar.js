import React, { useState } from 'react'
import Popup from './Popup'
import google from '../Images/google.svg'
import facebook from '../Images/facebook.svg'
import instagram from '../Images/instagram.svg'
import twitter from '../Images/twitter.svg'
import email from '../Images/email.svg'
import { Link } from 'react-router-dom'
import './css/Navbar.css'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
  const [isOpenBtn, setIsOpenBtn] = useState(false)

  const togglePopupBtn = () => {
    setIsOpenBtn(!isOpenBtn)
  }
  return (
    <div className='navbar'>
      <h2>Blog</h2>
      <div className='navbar__login'>
        <button className='btnx btn-in' onClick={togglePopupBtn}>
          Start Writing
        </button>
        {/* <button className='btn btn-up'>SignUp</button> */}
        {isOpenBtn &&
          (!isOpen ? (
            <Popup
              content={
                <>
                  <section className='form'>
                    {/* <p className='heading'>Welcome Back</p> */}
                    <p className='rsub_heading'>
                      To start writing, join Medium. It's fast and free.
                    </p>
                    <button className='btn'>
                      <Link
                        to='/google'
                        style={{
                          textDecoration: 'none',
                          color: 'black',
                          textAlign: 'center',
                        }}
                      >
                        <img src={google} className='google' />
                        &nbsp; Sign up with Google{' '}
                      </Link>
                    </button>
                    <button className='btn'>
                      <Link
                        to='facebook'
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        <img src={facebook} className='facebook' />
                        &nbsp; Sign up with Facebook
                      </Link>
                    </button>
                    <button className='btn'>
                      <Link
                        to='email'
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        <img src={email} className='email' />
                        &nbsp; Sign up with Email
                      </Link>
                    </button>
                    <p className='font co'>
                      Already have an account?{' '}
                      <Link
                        to=''
                        style={{
                          textDecoration: 'none',
                          color: 'green',
                        }}
                        onClick={togglePopup}
                      >
                        Sign in
                      </Link>
                    </p>
                    <p className='rtandc'>
                      Click “Sign Up” to agree to Medium’s{' '}
                      <Link
                        to=''
                        style={{
                          color: '#757575',
                        }}
                      >
                        Terms of Service
                      </Link>{' '}
                      and acknowledge that Medium’s{' '}
                      <Link
                        to=''
                        style={{
                          color: '#757575',
                        }}
                      >
                        Privacy Policy{' '}
                      </Link>
                      applies to you.
                    </p>
                  </section>
                </>
              }
              handleClose={togglePopupBtn}
            />
          ) : (
            <Popup
              content={
                <>
                  <section className='form'>
                    <p className='heading'>Welcome Back</p>
                    <p className='lsub_heading font'>
                      To start writing, join Medium or sign in. It's fast and
                      free.
                    </p>
                    <button className='btn'>
                      <Link
                        to='/google'
                        style={{
                          textDecoration: 'none',
                          color: 'black',
                          textAlign: 'center',
                        }}
                      >
                        <img src={google} className='google' />
                        &nbsp; Sign in with Google{' '}
                      </Link>
                    </button>
                    <button className='btn'>
                      <Link
                        to='facebook'
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        <img src={facebook} className='facebook' />
                        &nbsp; Sign in with Facebook
                      </Link>
                    </button>
                    <button className='btn'>
                      <Link
                        to='instagram'
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        <img src={instagram} className='instagram' />
                        &nbsp; Sign in with Instagram
                      </Link>
                    </button>
                    <button className='btn'>
                      <Link
                        to='twitter'
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        <img src={twitter} className='twitter' />
                        &nbsp; Sign in with Twitter
                      </Link>
                    </button>
                    <button className='btn'>
                      <Link
                        to='email'
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        <img src={email} className='email' />
                        &nbsp; Sign in with Email
                      </Link>
                    </button>
                    <p className='font co'>
                      No account?{' '}
                      <Link
                        to=''
                        style={{
                          textDecoration: 'none',
                          color: 'green',
                        }}
                        onClick={togglePopup}
                      >
                        Create one
                      </Link>
                    </p>
                    <p className='ltandc'>
                      Click “Sign In” to agree to Medium’s{' '}
                      <Link
                        to=''
                        style={{
                          color: '#757575',
                        }}
                      >
                        Terms of Service
                      </Link>{' '}
                      and acknowledge that Medium’s{' '}
                      <Link
                        to=''
                        style={{
                          color: '#757575',
                        }}
                      >
                        Privacy Policy{' '}
                      </Link>
                      applies to you.
                    </p>
                  </section>
                </>
              }
              handleClose={togglePopupBtn}
            />
          ))}
      </div>
    </div>
  )
}

export default NavBar
