import React from 'react'
import './footer.css'
import Github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkeden from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkeden} alt="" />
        </div>
        <div className="logo-footer">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="blur blur-footer-1"></div>
      <div className="blur blur-footer-2"></div>
    </div>
  )
}

export default Footer