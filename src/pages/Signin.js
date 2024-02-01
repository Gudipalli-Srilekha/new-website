import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Login({ onLogin }) {
  const Emailref = useRef(null);
  const Passwordref = useRef(null);
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] = useState('');
const nav = useNavigate();
  const handleLogin = () => {
    const user = {
      Email: Emailref.current.value,
      Password: Passwordref.current.value,
    };

    // Reset validation messages
    setEmailValidationMessage('');
    setPasswordValidationMessage('');

    // Validate email
    if (!user.Email.trim()) {
      setEmailValidationMessage('Email is required');
      return;
    }

    // Validate password
    if (!user.Password.trim()) {
      setPasswordValidationMessage('Password is required');
      return;
    }

    axios.get(`http://127.0.0.1:3006/fetch/${user.Email}/${user.Password}`, user)
      .then((response) => {
        // Call the onLogin callback with the login result
        onLogin(response.data.success);
nav('/Home') 
        console.log("Login Successful");
        // Optionally reset input values
        Emailref.current.value = '';
        Passwordref.current.value = '';

      })
      .catch((error) => {
        console.error('Login failed', error);

        // Call the onLogin callback with the login result
        onLogin(false);

        alert('Error, user is not registered');
      });
  };

  return (
    <div className='containers'>
      
        <fieldset className='form'>
          <legend className='texts'>Sign In</legend>
          
          <div className='inputs'>
          <label className='inp'><MdEmail /></label> 
            <input type="text" ref={Emailref} placeholder="Email"  /></div>
            <em> <span className="validation-message">{emailValidationMessage}</span></em>
            <br />

            <div className='inputs'>
            <label className='inp'><RiLockPasswordFill /></label>
            <input type="password" ref={Passwordref} placeholder="Password"  /></div>
            <span className="validation-message">{passwordValidationMessage}</span>
            <br />
            <br />
            <button onClick={handleLogin} className='submits'>Login</button><br /><br />
            <em className='fg'>don't have an account?</em>
        {/* Link to the Signup component */}
        <Link to="/Register" >Signup</Link>
        <br />
        <br />
        </fieldset>
        
      </div>
  
    
  );
}