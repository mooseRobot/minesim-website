import React from 'react';

function Player({ player, rank }) {
    return (
        <tr>
            <td>{rank}</td>
            <td>{player.username}</td>
            <td><img src={player.avatarURL} alt="Player's avatar" width="50" height="50"/></td>
            <td>{player.wealth.toLocaleString("en-US")}</td>
            <td>{player.clan}</td>
            <td>{player.rebirths.toLocaleString("en-US")}</td>
            <td>{player.multiplier.toLocaleString("en-US")}</td>
        </tr>
    );
}

export default Player