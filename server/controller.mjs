import 'dotenv/config';
import express from 'express';
import * as leaderboard from './model.mjs'

const PORT = process.env.PORT;
const app = express();
app.use(express.json())

// Retrieve controller
app.get('/topleaderboard', (req, res) => {
    const players = leaderboard.getPlayerIdAndStats();

    if (players && players.length > 0) {
        res.json(players);
    } else {
        res.status(404).json({ Error: 'No players found.' });
    }
});
 
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
});