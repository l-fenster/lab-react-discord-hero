// src/App.jsx
import "./App.css";
import discordBackground from "./assets/discord-background.png";
import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";

function App() {
  return (
    <div className="App">
      <div class="headDiv">
        <img src={discordLogo} alt="discord logo" width="200px" height="38px" />
        <img src={menuIcon} alt="menu icon" />
      </div>
      <div class="text">
        <h2>Imagine a place...</h2>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
      </div>
      <div class="buttonsAndBackground">
        <div class="buttons">
          <a href="https://discord.com/download" target="_blank">
            <button class="downloadMac">Download for Mac</button>
          </a>
          <br />
          <a href="https://discord.com/channels/@me" target="_blank">
            <button class="openDiscord">Open Discord in your browser</button>
          </a>
        </div>
      </div>
      <img
        class="background"
        src={discordBackground}
        alt="discord background"
      />
    </div>
  );
}

export default App;
