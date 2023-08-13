// Top 25 players Leaderboard

import { React, useState, useEffect } from 'react';
import PlayerLeaderboard from '../components/PlayerLeaderboard.js';
import ServerLeaderboard from '../components/ServerLeaderboard.js';

function Leaderboard() {
    const [playerLeaderboardList, setPlayerLeaderboardList] = useState([])
    const [serverLeaderboardList, setServerLeaderboardList] = useState([])

    const loadPlayerLeaderboard = async () => {
        const response = await fetch('/playerleaderboard');
        const data = await response.json();
        setPlayerLeaderboardList(data);
    };

    const loadServerLeaderboard = async () => {
        const response = await fetch('/serverleaderboard');
        const data = await response.json();
        setServerLeaderboardList(data);
    };

    useEffect(() => { loadPlayerLeaderboard(); }, [])
    useEffect(() => { loadServerLeaderboard(); }, [])

    return (
        <>
        <h2>Player Leaderboard</h2>
        <PlayerLeaderboard players={playerLeaderboardList} />
        &nbsp;
        {/* To do: Create two tabs, player and server left and right of each other */}
        <h2>Server Leaderboard</h2>
        <ServerLeaderboard servers={serverLeaderboardList} />
        </>
    )
}

export default Leaderboard;
