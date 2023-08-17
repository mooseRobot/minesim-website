import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { inject } from '@vercel/analytics';

// Import pages
import Nav from './components/Nav.js'
import Leaderboard from './pages/Leaderboard.js'

function App() {
  inject();
  return (
    <div>
      <BrowserRouter>

        <Nav />

        <main>
        <div className="pages">
          <Routes>
            <Route exact path="/" />
            <Route path="/premium" />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/server" />
            <Route path="/vote" />
          </Routes>
        </div>

        </main>

      </BrowserRouter>

      <footer>
        <p>&copy; MineSim</p>
        <p>github</p>
        <p>discord server</p>
        <p>patreon</p>
        <p>privacy policy</p>
        <p>contact us</p>
      </footer>

    </div>
  );
}

export default App;
