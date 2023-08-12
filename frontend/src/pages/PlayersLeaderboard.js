// Top 25 players Leaderboard

import { React, useState, useEffect } from 'react';
import PlayerList from '../components/PlayerList.js'

function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([])

    const loadLeaderboard = async () => {
        const response = await fetch('/topleaderboard');
        const data = await response.json();
        setLeaderboard(data);
    };

    // Load all players
    useEffect(() => { loadLeaderboard(); }, [])
    console.log(leaderboard)
    return (
        <>
        <h2>Leaderboard</h2>
        <PlayerList
            players={leaderboard}
        />
        </>
    )
}

export default Leaderboard