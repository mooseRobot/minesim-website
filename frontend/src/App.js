import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import Nav from './components/Nav.js'
import Leaderboard from './pages/Leaderboard.js'

function App() {
  return (
    <div>
      <BrowserRouter>

        <Nav />

        <main>
          <Routes>
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>

        </main>

      </BrowserRouter>

      <footer>
        <p>&copy; MineSim</p>
      </footer>

    </div>
  );
}

export default App;
