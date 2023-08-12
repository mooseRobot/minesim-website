import 'dotenv/config';
import express from 'express';
import * as leaderboard from './playerModel.mjs'

const PORT = process.env.PORT;
const app = express();
app.use(express.json())

// Retrieve controller
app.get('/topleaderboard', (req, res) => {
    leaderboard.getPlayerIdAndStats()
    .then(players => {
        if (players !== null) {
            res.json(players);
        } else {
            res.status(404).json({ Error: 'document not found.' });
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'retrieve document failed.' });
    })
})
 
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
});