import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <header className="navbar-container1">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <div className="navbar-container2">
          <div data-thq="thq-navbar-nav" className="navbar-desktop-menu"></div>
        </div>
        <span className="navbar-text1">
          {props.text1 ?? (
            <Fragment>
              <span className="navbar-text4">BPD CLOUD</span>
            </Fragment>
          )}
        </span>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar-logo"
              />
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links1">
              <span className="thq-link thq-body-small">{props.link1}</span>
              <span className="thq-link thq-body-small">{props.link2}</span>
              <span className="thq-link thq-body-small">{props.link3}</span>
              <span className="thq-link thq-body-small">{props.link4}</span>
              <span className="thq-link thq-body-small">{props.link5}</span>
            </nav>
          </div>
          <div className="navbar-buttons1">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
        <div className="navbar-container3">
          <nav className="navbar-links2">
            <span className="thq-link thq-body-small">{props.link3}</span>
            <span className="thq-link thq-body-small">{props.link2}</span>
            <span className="navbar-link42 thq-link thq-body-small">
              {props.link4}
            </span>
            <span className="thq-link thq-body-small">{props.link1}</span>
          </nav>
        </div>
        <div className="navbar-buttons2">
          <button className="navbar-action12 thq-button-animated thq-button-filled">
            <span className="thq-body-small">Pay Now</span>
          </button>
          <button className="navbar-action22 thq-button-outline thq-button-animated">
            <span className="thq-body-small">Get A Quote</span>
          </button>
        </div>
      </header>
    </header>
  )
}

Navbar.defaultProps = {
  link2: 'Contact',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  action2: 'Redirect to Contact Page',
  link5: 'Pay Now',
  text1: undefined,
  action1: 'Redirect to Home Page',
  link4: 'Our Services',
  link1: 'Home',
  link3: 'About Us',
  logoAlt: 'Company Logo',
}

Navbar.propTypes = {
  link2: PropTypes.string,
  logoSrc: PropTypes.string,
  action2: PropTypes.string,
  link5: PropTypes.string,
  text1: PropTypes.element,
  action1: PropTypes.string,
  link4: PropTypes.string,
  link1: PropTypes.string,
  link3: PropTypes.string,
  logoAlt: PropTypes.string,
}

export default Navbar
