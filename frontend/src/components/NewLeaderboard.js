import React from 'react';
import './leaderboardStyles.css';

const NewLeaderboard = ({ players }) => {

  return (
    <div className="leaderboardContainer">
      <div className="topLeadersList">
        {players.slice(0,3).map((player, index) => (
          <div className="leader" key={player.username}>
            <div className="containerImage">
              <img className="image" loading="lazy" src={player.avatarURL} alt={player.username} />
              <div className="crown">
                </div>
              <div className="leaderName">{player.username}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="playerslist">
        <div className="table">
            <div>#</div>    
            <div>Name</div>
            <div>Wealth</div>
            <div>Clan</div>
            <div>Rebirths</div> 
            <div>Multiplier</div>
        </div>
        <div className="list">
          {players.map((player, index) => (
            <div className="player" key={player.username}>
              <span>{index + 1}</span>
              <div className="user">
                <img className="image" src={player.avatarURL} alt={player.username} />
                <span>{player.username}</span>
              </div>
              <span>{player.wealth.toLocaleString("en-US")}</span>
              <span>{player.clan}</span>
              <span>{player.rebirths.toLocaleString("en-US")}</span>
              <span>{player.multiplier.toLocaleString("en-US")}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewLeaderboard;
