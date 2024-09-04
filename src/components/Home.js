import React from 'react';
import Navbar from './Navbar';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to SecureAuth</h1>
          <p>Your Secure Authentication Solution</p>
          <button onClick={() => window.location.href='/signin'}>Get Started</button>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h2>Secure Login</h2>
          <p>Advanced encryption and protection mechanisms.</p>
        </div>
        <div className="feature">
          <h2>Easy Registration</h2>
          <p>Simple and user-friendly sign-up process.</p>
        </div>
        <div className="feature">
          <h2>Protected Routes</h2>
          <p>Access secure areas after authentication.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;