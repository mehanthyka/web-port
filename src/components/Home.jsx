import React from 'react';
import './Home.css';
import collegeImage from '../images/image.jpg'; // Correct the path to the image

const Home = () => {
  return (
    <div>
      <main>
        <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
          <img src={collegeImage} alt="College" className="hero-image" />
          <div className="hero-text">
            <h1>Welcome to Our College</h1>
            </div>
            <div class="hero1">
              <p>© 2024 Saveetha Engineering College. All rights reserved.</p>
            </div>
        </div>
      </main>
    </div>
  );
}

export default Home;