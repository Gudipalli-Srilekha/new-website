// src/components/NewsUpdates.js
import React from 'react';


const NewsUpdates = () => {
  return (
    <div className="news-updates">
      <h2>Neuzy - News Updates</h2>
      
      {/* Signup Benefits Section */}
      <div className="signup-benefits-section">
        <h3>Sign Up for Exclusive Benefits</h3>
        <ul>
          <li>Get the latest news updates delivered to your inbox.</li>
          <li>Access exclusive content and special promotions.</li>
          <li>Customize your news preferences for a personalized experience.</li>
        </ul>
        <button className="signup-button">Sign Up Now</button>
      </div>

      {/* Login Button */}
      <button className="login-button">Login</button>
    </div>
  );
};

export default NewsUpdates;
