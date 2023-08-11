// Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/MineSim.png';

function Nav() {
  return (
    <header>
      <div className='container'>
        <a href='http://localhost:8000/'>
          <img src={logo} className='logo' alt='logo'/>
        </a>

          <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Teams</Link></li>
                <li><Link to="/leaderboard">Leaderboard</Link></li>
                <li><Link to="/">Pitchers</Link></li>
              </ul>
            

              {/* <Link to="/">Login</Link> */}
          </nav>
      </div>
    </header>

  );
}

export default Nav;
