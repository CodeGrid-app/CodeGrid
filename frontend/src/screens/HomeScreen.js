import React from 'react';

function HomeScreen() {
  return <section className="flex" id="hero-section">
    <div className="hero-section-container">
      <div className="hero-left flex">
        <h1>Learn <span>Data Structures</span> & <span>Algorithms</span> with ease</h1>
        <p>Solve coding problems and prepare for technical interviews with <span>CodeGrid</span>. Join now!</p>
        <div className="flex">
          <button className="create-account-button">Create an account</button>
          <button className="login-button">Log in</button>
        </div>
      </div>

      <div className="hero-right flex">
        <img src='hero-icon.svg' alt='logo' />
      </div>
    </div>
  </section>
}

export default HomeScreen;
