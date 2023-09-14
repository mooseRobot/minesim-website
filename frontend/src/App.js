import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Analytics } from '@vercel/analytics/react';

// Import pages
import Nav from './components/Nav.js'
import About from './pages/About';
import Leaderboard from './pages/Leaderboard.js'

function App() {
  return (
    <div>
      <Analytics />
      <BrowserRouter>

        <Nav />

        <main>
          <Routes>
            <Route exact path="/" element={<About />}/>
            {/* <Route path="/premium" /> */}
            <Route path="/leaderboard" element={<Leaderboard />} />
            {/* <Route path="/server" /> */}
            {/* <Route path="/vote" /> */}
          </Routes>

        </main>

      </BrowserRouter>

      <footer>
        <div className={'copyright'}>
            <p>&copy; MineSim</p>
        </div>
        <div className={'external-links'}>
            <div className={'social'}>
                <p><b>Socials</b></p>
                {/* Add classes */}
                <a href={'https://github.com/mooseRobot/minesim-website'} target={'_blank'} rel={"noopener noreferrer"}>GitHub</a>
                <a href={''}>Discord server</a>
                <a>Patreon</a>
            </div>
            <div className={'legal'}>
                <p><b>Legal</b></p>
                <a>Privacy policy</a>
                <a>Contact us</a>
            </div>
        </div>

      </footer>

    </div>
  );
}

export default App;
