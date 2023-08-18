import 'dotenv/config';
import express from 'express';
import * as leaderboard from './model.mjs'

const PORT = process.env.PORT;
const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Express on Vercel");
  });

// Retrieve player leaderboard
app.get('/playerleaderboard', (req, res) => {
    const players = leaderboard.getPlayerIdAndStats();

    if (players && players.length > 0) {
        res.json(players);
    } else {
        res.status(404).json({ Error: 'No players found.' });
    };
});

// Retrieve server leaderboard
app.get('/serverleaderboard', (req, res) => {
    const servers = leaderboard.getServerAndStats();

    if (servers && servers.length > 0) {
        res.json(servers);
    } else {
        res.status(404).json({ Error: 'No servers found.' });
    };
});
 
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
});

export default app;