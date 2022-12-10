import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { useState } from 'react'
import {Link} from'react-scroll'
const Header = () => {
    const mobile = window.innerWidth < 768 ? true : false
    const [menuOpen,setMenuOpend]=useState(false)
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__logo" />
      {menuOpen === false && mobile === true ? (
        <div
          onClick={() => setMenuOpend(true)}
          style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          <img
            src={bars}
            alt=""
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </div>
      ) : (
        <ul className="header__menu">
          <li onClick={() => setMenuOpend(false)}>
            <Link
              onClick={() => setMenuOpend(false)}
                to="home"
              activeClass='active'
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpend(false)}>
            <Link
              onClick={() => setMenuOpend(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li onClick={() => setMenuOpend(false)}>
            <Link
              onClick={() => setMenuOpend(false)}
              to="reasons"
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li onClick={() => setMenuOpend(false)}>
            <Link
              onClick={() => setMenuOpend(false)}
              to="plans"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpend(false)}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Header