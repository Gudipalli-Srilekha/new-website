import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function Signup() {
  const navigate = useNavigate();
  const Nameref = useRef(null);
  const Emailref = useRef(null);
 
  const passwordref = useRef(null);
  const [validationMessage, setValidationMessage] = useState("");

  const handleInput = () => {
    const newuser = {
      username: Nameref.current.value,
      Email: Emailref.current.value,
      Password: passwordref.current.value,
     
    };

    if (Nameref.current.value.trim() === "") {
      setValidationMessage("Please enter a valid username.");
    } else if (Emailref.current.value.trim() === "") {
      setValidationMessage("Please enter a valid email.");
    } else if (passwordref.current.value.trim() === "") {
      setValidationMessage("Please enter a valid password.");
    } else {
      axios
        .post("http://127.0.0.1:3006/Register", newuser)
        .then((res) => {
          console.log(newuser);
          setValidationMessage("Registered Successfully");
          Nameref.current.value = "";
          Emailref.current.value = "";
          passwordref.current.value = "";
          
        })
        .catch((error) => {
          console.error("Registration failed:", error.message);
          setValidationMessage("Registration failed. Please try again later.");
        });
    }
  };

  const handlenavi = () => {
    navigate("/login");
  };

  return (
    <div className="containers">
      
      <em className="ar">{validationMessage}</em>{" "}
        <fieldset className="m-5">
          <legend className="texts">Sign Up</legend>
          <div className="inputs">
          <label className='inp'> <FaUser /></label>
          <input
            type="text"
            placeholder="Enter Username"
            ref={Nameref}
            
          /></div>
          
          
          <div className="inputs">
          <label className='inp'><MdEmail /></label>
          <input
            type="text"
            placeholder="Enter Email"
            ref={Emailref}
            className="textfield"
          /></div>
          
          <div className="inputs">
          <label className='inp'><RiLockPasswordFill /></label>
          <input
            type="password"
            placeholder="Enter Password"
            ref={passwordref}
            className="textfield"
          /></div>

          
          <button type="button"  onClick={handleInput} className="submits">
            SignUp
          </button>
          <br />

          
          <i  >
            {" "}
            Already Registered?
          </i><span onClick={handlenavi}>Signin</span>
          <br />
          <br />
        </fieldset>
       
      </div>
    
  );
}

export default Signup;