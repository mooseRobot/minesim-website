// Navigate from page to page

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/MineSim.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const Close = () => {
    setClick(false);
  };

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
              <img src={logo} className='logo' alt='minesim logo'/>
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/premium"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Premium
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Leaderboard"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Leaderboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/server"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Support Server
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/vote"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Vote
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
