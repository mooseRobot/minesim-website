import { React } from 'react';
import './about-styling.css'
import minesimsplash from '../images/MineSimSpash.png'
import anime from '../images/anime.png'
import gamble from '../images/gamble.png'
import stocks from '../images/stocks.jpg'
import town from '../images/town.png'

function About () {
    return (
        <div className="content">
            <div className="content-top padding-15">
                <div className="content-top-left">
                    <p className="title">MineSim</p>
                    <p className="top-subtext"><b>Join thousands of users</b> around the world in Discord's most fun economic bot. With a dynamic in-game economy and a plethora of features, it is designed to offer endless opportunities for fun and competition. Invite now to embark on a journey to riches and glory</p>
                    <a className="invite-button" target="_blank" rel="noopener noreferrer" href="https://discord.com/oauth2/authorize?client_id=1043441355847901214&permissions=1093606571088&scope=bot%20applications.commands">
                        Click to Invite
                    </a>
                </div>
                <img alt="minesim splash" className="content-top-picture" src={minesimsplash} />
            </div>

            <p className="content-info-title">At a Glance</p>
            <div className="content-info">
                <div className="content-info-container">
                    <img alt="anime girl" src={anime} className="random-info-icon" width="150" />
                    <p className="content-info-text">Meet our charming mascot</p>
                </div>

                <div className="content-info-container">
                    <img alt="gamble" src={gamble} width="150" className="random-info-icon" />
                    <p className="content-info-text">The less you bet, the more you can't win</p>
                </div>

                <div className="content-info-container">
                    <img alt="stocks" src={stocks} width="150" className="random-info-icon" />
                    <p className="content-info-text">There's no way this can go tits up</p>
                </div>

                <div className="content-info-container">
                    <img alt="town" src={town} width="150" className="random-info-icon" />
                    <p className="content-info-text">Your pathway to riches</p>
                </div>
            </div>

            <div className="quote-container">
                <em className="quote">Really fun and additive game. I enjoy the different ways we can utilize our earnings to progress. Adding more random text to fill up more space.</em>
                <p className="author">-Tofu</p>
            </div>

            <div className="call-to-action">
                <div className="banner">
                    <div className="call-to-action-text">
                        <p className="call-to-action-title">Ready to Strike it Rich? Start Mining Now!</p>
                        <p className="call-to-action-subtext">Click 'Invite' to bring MineSim to your server. Your adventure awaits!</p>
                    </div>
                    <a className="invite-button call-to-action-button" target="_blank" rel="noopener noreferrer" href="https://discord.com/oauth2/authorize?client_id=1043441355847901214&permissions=1093606571088&scope=bot%20applications.commands">
                        Click to Invite
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;