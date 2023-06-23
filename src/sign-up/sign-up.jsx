import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../App.css";
import "./sign-up.css";
import FormInput from "../components/form-input";
import Button from "../components/ui/button/button";
import logo from '../assets/logo.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faLongArrowDown } from "@fortawesome/free-solid-svg-icons";

// import google from "../assets/google.svg";
// import linkedIn from "../assets/linkedin.svg";
// import twitter from "../assets/twitter.svg";

// import { FontAwesomeicon } from '@fortawesome/react-fontawesome'

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const nameSet = (e) => {
    setName(e.target.value);
  };
  const emailSet = (e) => {
    setEmail(e.target.value);
  };
  const passwordSet = (e) => {
    setPassword(e.target.value);
  };
  const errorMsg = "Fill in your email or password";

  const handleSignUp = (e) => {
    e.preventDefault();

    // const { value, name } = e.target;
    // Update state variables directly using useState hook
    // if (name === "email") {
    //   setEmail(value);
    // } else if (name === "password") {
    //   setPassword(value);
    // }

    if (name && email && password) {
      console.log("Done");
      console.log("name :", name);
      console.log("email :", email);
      console.log("password :", password);
      setEmail("");
      setPassword("");
      navigate("/thanksforcreating");

      return "";
    }

    alert(errorMsg);
    throw new Error(errorMsg);
  };
  return (
    <div className="head-container">
      {/* <div className="image_container">
        <img src={workImg} alt="co-workere"/>
      </div> */}
      <div className="center">
        <div className="container">
          <form className="sign-in" onSubmit={handleSignUp}>
          <div className="image_container">
            <img src={logo} alt="co-workere" />
          </div>
            <div className="label_container">
              <label>Your Name</label>
            </div>
            <FormInput
              type="text"
              value={name}
              name="email"
              // placeholder='email'
              // label="name"
              onChange={nameSet}
            />
            <div className="label_container">
              <label>Email</label>
            </div>
            <FormInput
              type="text"
              value={email}
              name="email"
              // placeholder='email'
              // label="email"
              onChange={emailSet}
            />
            <div className="label_container">
              <label>Password</label>
            </div>
            <FormInput
              type="password"
              // label="password"
              value={password}
              name="password"
              // placeholder='password'
              onChange={passwordSet}
            />
            {/* <button type="submit" className="submit-btn" onClick={handleChange}>SIGN IN</button> */}
            <Button type="submit">Sign Up</Button>
          </form>
          <div>
            <p className="or">OR</p>
          </div>
          <div className="socials">
            <p className="sign_in_with">Sign In with socials</p>
            <button className="social-links">
              <span>Sign In with Google </span>
              <div className="socials-icons">
                {/* <img src={google} alt="" /> */}
                <FontAwesomeIcon
                  icon={faGoogle}
                  style={{ fontSize: 30, color: "#415c76" }}
                  className="text-center"
                />
              </div>
            </button>
            <button className="social-links">
              <span>Sign In with LinkedIN </span>
              <div className="socials-icons">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ fontSize: 30, color: "#415c76" }}
                  className="text-center"
                />

                {/* <img src={linkedIn} alt="" /> */}
              </div>
            </button>
            <button className="social-links">
              <span>Sign In with Twitter </span>
              <div className="socials-icons">
                {/* <img src={twitter} alt="" /> */}
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ fontSize: 30, color: "#415c76" }}
                  className="text-center"
                />
              </div>
            </button>
            <p>
              <Link to="/signin">You already have and account? LOGIN</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
