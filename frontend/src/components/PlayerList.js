import React from 'react';
import Player from './Player';

function PlayerList({ players }) {
    return (
        <table class='player_leaderboard'>
            <caption>Top 25 players</caption>
            <thead>
                <tr>
                    <td>Rank</td>
                    <td>Name</td>
                    <td>Picture</td>
                    <td>Wealth</td>
                    <td>Clan</td>
                    <td>Rebirths</td>
                    <td>Multiplier</td>
                </tr>
            </thead>
            <tbody>
                {players.map((player, i) =>
                <Player
                    player={player}
                    rank={i + 1}
                    key={i}
                />)}
            </tbody>
        </table>
    );
}

export default PlayerList;