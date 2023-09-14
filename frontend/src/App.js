import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import { Helmet } from 'react-helmet';

// Import pages
import Nav from './components/Nav.js'
import About from './pages/About';
import Leaderboard from './pages/Leaderboard.js'
import Terms from './pages/terms.js'

function App() {
  return (
    <div>
        <Helmet>
            <title>MineSim - The Ultimate Discord Economic Bot</title>
            <meta name="description" content="Embark on a journey to riches and glory with MineSim, the leading economic bot on Discord offering endless opportunities for fun and competition." />
            <meta name="keywords" content="MineSim, Discord Bot, Economic Bot, Gaming, Minecraft, Discord Games, Casino Games, Stock Market Simulation, Clan System" />
            <meta property="og:title" content="MineSim - The Ultimate Discord Economic Bot" />
            <meta property="og:description" content="Embark on a journey to riches and glory with MineSim, the leading economic bot on Discord offering endless opportunities for fun and competition." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.minesim.net/" />
            <link rel="canonical" href="https://www.minesim.net/" />
        </Helmet>
      <Analytics />
      <BrowserRouter>

        <Nav />

        <main>
          <Routes>
            <Route exact path="/" element={<About />}/>
            {/* <Route path="/premium" /> */}
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path='terms' element={<Terms />} />
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
                <a href={'https://discord.gg/488NvtTzkE'} target={'_blank'} rel={"noopener noreferrer"}>Support Server</a>
                <a href={'https://www.patreon.com/MineSim'} target={'_blank'} rel={"noopener noreferrer"}>Patreon</a>
            </div>
            <div className={'legal'}>
                <p><b>Legal</b></p>
                <a href={'/terms'}>Terms Of Service</a>
                <a href={'https://github.com/mooseRobot/MineSim/blob/main/PRIVACY.md'}>Privacy Policy</a>
                <a href={"mailto:admin@minesim.net"}>Contact Us</a>
            </div>
        </div>

      </footer>

    </div>
  );
}

export default App;
