import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


export default function Login({ onLogin }) {
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] = useState('');

  const handleLogin = () => {
    const user = {
      email: emailref.current.value,
      password: passwordref.current.value,
    };

    // Reset validation messages
    setEmailValidationMessage('');
    setPasswordValidationMessage('');

    // Validate email
    if (!user.email.trim()) {
      setEmailValidationMessage('Email is required');
      return;
    }

    // Validate password
    if (!user.password.trim()) {
      setPasswordValidationMessage('Password is required');
      return;
    }

    axios.get(`http://127.0.0.1:3006/find/${user.Email}/${user.Password}`, user)
      .then((response) => {
        // Call the onLogin callback with the login result
        onLogin(response.data.success);

        console.log("Login Successful");
        // Optionally reset input values
        emailref.current.value = '';
        passwordref.current.value = '';
        
      })
      .catch((error) => {
        console.error('Login failed', error);

        // Call the onLogin callback with the login result
        // onLogin(false);

        alert('Error, user is not registered');
      });
  };

  return (
    <div className='containers'>
      
        <fieldset >
          <legend className='texts'>Sign In</legend>
       
          <div className='inputs'>
          <label className='inp'><MdEmail /></label> 
            <input type="text" ref={emailref} placeholder="Email"  /></div>
            <em> <span className="validation-message">{emailValidationMessage}</span></em>
           
             <div className='inputs'>
            <label className='inp'><RiLockPasswordFill /></label>
            <input type="password" ref={passwordref} placeholder="Password"  /></div>
            <em><span className="validation-message">{passwordValidationMessage}</span></em>
           
            <button onClick={handleLogin} className='submits'>Login</button><br />
         
        </fieldset>
        <em className='fg'> dont't have an account?</em>
        {/* Link to the Signup component */}
        <Link to="/Register"  >Signup</Link>
      </div>
  );
}










// import React, { useState } from "react";
// import {
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   Form,
//   FormGroup,
//   Label,
//   Input,
// } from "reactstrap";
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
// import axios from "axios";


// const Login = ({ isOpen, toggle }) => {
//   const navigate = useNavigate(); // Use the useNavigate hook for programmatic navigation
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginError, setLoginError] = useState(null);
//   const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     let formdata = {
//       email: email,
//       password: password,
//     };

//     try {
//       let response = await axios.get(
//         `http://localhost:3002/Login/${email}/${password}`
//       );

//       if (response.data) {
//         console.log("Login successful");
//         alert(`Hi ${response.data.username}`);
//         toggle();

//         // Redirect to UserDetailsPage with email as a prop
//         navigate(`/UserDetailsPage/${email}`);
//       } else {
//         console.log("Login failed");
//         alert("Your credentials are incorrect");
//         toggle();
//       }
//     } catch (err) {
//       console.error(
//         "Login error:",
//         err.response.data.error || "An error occurred during login"
//       );
//       if (err.response && err.response.data) {
//         setLoginError(
//           err.response.data.error || "An error occurred during login"
//         );
//       } else {
//         setLoginError("An error occurred during login");
//       }
//     }
//   };

//   const toggleRegisterModal = () => {
//     setRegisterModalOpen(!isRegisterModalOpen);
//   };

//   return (
//     <div className="containers">
//       <Modal isOpen={isOpen} toggle={toggle}>
//         <ModalHeader toggle={toggle}>Login</ModalHeader>
//         <ModalBody>
//           <Form onSubmit={handleLogin}>
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input
//                 type="text"
//                 name="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormGroup>
//             {loginError && <p style={{ color: "red" }}>{loginError}</p>}
//             <Button color="primary" type="submit" onClick={toggle}>
//               Login
//             </Button>{" "}
//             <Link to="#" onClick={toggleRegisterModal}>
//               Not registered? Register here.
//             </Link>
//             <Button color="secondary" onClick={toggle}>
//               Cancel
//             </Button>
//           </Form>
//         </ModalBody>
//       </Modal>

      
//     </div>
//   );
// };

//  export default Login;