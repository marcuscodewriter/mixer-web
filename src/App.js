import React from 'react';
import './App.css';
import screenshot0 from './screenshot0.png';
import screenshot1 from './screenshot1.png';
import screenshot2 from './screenshot2.png';
import screenshot3 from './screenshot3.png';
import screenshot4 from './screenshot4.png';
import screenshot5 from './screenshot5.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar-title">$TON Mixer</div>
          <div className="navbar-links">
            <a href="https://t.me/TON_mix_bot" target="_" data-icon="🔀 Mixer">🔀 Mixer</a>
            <a href="https://t.me/tonmixerchat" target="_" data-icon="📲 TG">📲 Telegram</a>
            <a href="https://x.com/tonmixerbot" target="_" data-icon="𝕏 Twitter">𝕏 Twitter</a>
          </div>
        </nav>
      </header>
      <section id="about" className="about-section">
        <h2>About $TON Mixer</h2>
        <p style={{ textAlign: 'center' }} className="description">$TON Mixer offers an easy solution for anonymizing your $TON transfers.</p>
        <p style={{ textAlign: 'left' }} className="description"><ul><li>Simply input the amount of $TON you wish to mix, along with the destination address.</li><li>Then a deposit address is generated and displayed for you to send your $TON.</li> <li>Upon confirmation of deposit the bot will go through several steps to mix and finally return your $TON into the destination address.</li></ul> <em>During the process the mixer keeps a live update on the status of your exchange for you to monitor its progress.</em></p>
        <p style={{ textAlign: 'center' }} className="description">This entire process allows users to scramble and mix their $TON such that one cannot follow the trail of transactions nor link your funds to any previous addresses.</p>
        <div className="screenshot-grid">
          <img src={screenshot0} alt="Screenshot 0" className="screenshot"/>
          <img src={screenshot1} alt="Screenshot 1" className="screenshot"/>
          <img src={screenshot2} alt="Screenshot 2" className="screenshot"/>
          <img src={screenshot3} alt="Screenshot 3" className="screenshot"/>
          <img src={screenshot4} alt="Screenshot 4" className="screenshot"/>
          <img src={screenshot5} alt="Screenshot 5" className="screenshot"/>
        </div>
      </section>
    </div>
  );
}

export default App;