import React from 'react';
import './leaderboardStyles.css';

const ServerLeaderboard = ({ servers }) => {

  return (
    <div className="leaderboardContainer">
      <div className="topLeadersList">
        {servers.slice(0,3).map((server, index) => (
          <div className="leader" key={server.name}>
            <div className="containerImage">
              <img className="image" loading="lazy" src={server.iconURL} alt={server.name} />
              <div className="crown">
                </div>
              <div className="leaderName">{server.name}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="playerslist">
        <div className="servertable">
            <div>#</div>    
            <div>Server Name</div>
            <div>Wealth</div>
            <div>Members</div>
        </div>
        <div className="list">
          {servers.map((server, index) => (
            <div className="server" key={server.name}>
              <span>{index + 1}</span>
              <div className="servername">
                <img className="image" src={server.iconURL} alt={server.name} />
                <span>{server.name}</span>
              </div>
              <span>{server.balance.toLocaleString("en-US")}</span>
              <span>{server.memberCount.toLocaleString("en-US")}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerLeaderboard;
