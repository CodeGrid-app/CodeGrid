import React from 'react';

function HomeScreen() {
  return <section className="flex" id="hero-section">
    <div className="hero-section-container">
      <div className="hero-left flex">
        <h1>Learn <span>Data Structures</span> & <span>Algorithms</span> in a nice fashion</h1>
        <p>Unlock your coding potential at <span>CodeGrid</span> - Join now!</p>
        <div className="flex">
          <button className="login-button">Log in</button>
          <button className="create-account-button">Create an account</button>
        </div>
      </div>
      <div>
        <img src='logo.svg' alt='logo' style={{width:"100%"}}/>
      </div>
    </div>
  </section>
}

export default HomeScreen;
