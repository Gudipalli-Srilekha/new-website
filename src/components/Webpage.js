// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from 'react';

// Import your styles

const Home = () => (
  <div>
    <h1>Nezy News Updates</h1>
    <p>Welcome to Nezy News Updates. Get the latest news here!</p>
  </div>
);

const Login = () => (
  <div>
    <h2>Login Page</h2>
    {/* Add your login form and logic here */}
  </div>
);

const Signup = () => (
  <div>
    <h2>Signup Page</h2>
    {/* Add your signup form and logic here */}
  </div>
);

const Webpage= () => {
  
  return (
    
      <div className="app-containers">
        <header className="headers">
          
            <img src="/image.jpg" alt="Background" className="background-images" />
       
          <div className="overlay">
            <h1 className="header-titles">Neuzy News Updates</h1>
            <h1 className="header-titles">Get the latest news updates delivered to your inbox</h1>
            <div className="button-containers">
              <Link to="/login">
                <button className="buttons">Login</button>
              </Link>
              <Link to="/Register">
                <button className="buttons">Signup</button>
              </Link>
            </div>
          </div>
        </header>

        
      </div>
    
  );
};

export default Webpage;
