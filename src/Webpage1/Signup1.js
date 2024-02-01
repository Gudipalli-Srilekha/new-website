import React, { useState } from 'react';
import axios from 'axios';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";



const Signup1 = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (formData.username.length < 5) {
      alert('Username should have a minimum of 5 characters.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Invalid email format: ' + formData.email);
      return;
    }

    // Validate password format
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert('Password should contain at least one special character, one uppercase letter, one lowercase letter, and one number.');
      return;
    }

    // Check for repetition of data (dummy check, replace with actual API call)
    try {
      const response = await axios.post('http://localhost:3006/Register', formData);
      if (response.data.isDuplicate) {
        alert('User with the same data already exists.');
        return;
      }
    } catch (error) {
      console.error('Error checking duplicate data:', error);
    }

    // If all validations pass, submit the registration
    try {
      await axios.post('http://localhost:3006/Register', formData);
      setRegistrationStatus('Registration successful!');
      alert('Registration successful!');
      setFormData({
        username: '',
        email: '',
        password: '',
      });
    } catch (error) {
      setRegistrationStatus('Registration failed.');
      alert('Registration failed.');
      console.error('Error submitting registration:', error);
    }
  };

  return (
    <div className='containers'>
        <div className='headers'>
      <div className='texts'>Registration Page</div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <label className='inp'> <FaUser /></label>
          <input
            type="text"
            name="username"
            placeholder='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputs">
          <label className='inp'><MdEmail /></label>
          <input
            type="email"
            name="email"
            placeholder='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputs">
          <label className='inp'><RiLockPasswordFill /></label>
          <input
            type="password"
            name="password"
            placeholder='password'
        
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submits" type="submit">Register</button>
      </form>
      {registrationStatus && <p>{registrationStatus}</p>}
    </div>
    </div>
  );
};

export default Signup1;
