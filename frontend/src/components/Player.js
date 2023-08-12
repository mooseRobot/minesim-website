import React from 'react';

function Player({ player }) {
    return (
        <tr>
            <td>{player.username}</td>
            <td><img src={player.avatarURL} alt="Player's avatar" width="50" height="50"/></td>
            <td>{player.wealth}</td>
            <td>{player.clan}</td>
            <td>{player.rebirths}</td>
            <td>{player.multiplier}</td>
        </tr>
    );
}

export default Player