// Top 25 players Leaderboard

import { React, useState, useEffect } from 'react';
import NewLeaderboard from '../components/NewLeaderboard.js';

function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([])

    const loadLeaderboard = async () => {
        const response = await fetch('/topleaderboard');
        const data = await response.json();
        setLeaderboard(data);
    };

    useEffect(() => { loadLeaderboard(); }, [])

    return (
        <>
        <h2>Player Leaderboard</h2>
        <NewLeaderboard players={leaderboard} />
        &nbsp;
        {/* To do: Create two tabs, player and server left and right of each other */}
        <h2>Server Leaderboard</h2>
        </>
    )
}

export default Leaderboard;
