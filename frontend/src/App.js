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
                <a href={'https://github.com/mooseRobot/minesim-website'} target={'_blank'}>GitHub</a>
                <a href={''}>Discord server</a>
                <p>Patreon</p>
            </div>
            <div className={'legal'}>
                <p><b>Legal</b></p>
                <p>Privacy policy</p>
                <p>Contact us</p>
            </div>
        </div>

      </footer>

    </div>
  );
}

export default App;
