import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import "./Navigation.scss"
import {ReactComponent as CrwnLogo} from '../../assets/007 crown.svg'
const Navigation = () => {
  return (
    <>
        <div className=' flexCenter paddings innerWidth navigation'>
            <Link className='logo-container' to="/">
              <CrwnLogo className='logo' />
            </Link>
            <div className="flexEnd nav-links-container">
                <Link className='nav-link' to='/shop'> SHOP</Link>
                <Link className='nav-link' to='/shop'> CONTACT</Link>
                <Link className='nav-link' to='/auth'> SIGN IN</Link>
            </div>
        </div>
        <Outlet />
    </>
  )
}

export default Navigation