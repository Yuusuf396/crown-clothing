import { useState } from "react";
import FormInput from "../components/form-input";
import "./sign-in.css";
import Button from "../components/ui/button/button";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailSet = (e) => {
    setEmail(e.target.value);
  };
  const passwordSet = (e) => {
    setPassword(e.target.value);
  };

  const errorMsg = "Fill in your email or password";

  const handleSignIn = (e) => {
      e.preventDefault();

      // const { value, name } = e.target;
      // Update state variables directly using useState hook
      // if (name === "email") {
      //   setEmail(value);
      // } else if (name === "password") {
      //   setPassword(value);
      // }

      if (email && password) {
        console.log("Done");
        console.log("email :", email);
        console.log("password :", password);
        setEmail("");
        setPassword("");
        navigate("/dashboard");
        
        return "";
      }

      alert(errorMsg);
      throw new Error(errorMsg);
  };

  return (
    <div>
      <div className="center">
        <div className="container">
          <form className="sign-in" onSubmit={handleSignIn}>
            <FormInput
              type="text"
              value={email}
              name="email"
              // placeholder='email'
              label="email"
              onChange={emailSet}
            />
            <FormInput
              type="password"
              label="password"
              value={password}
              name="password"
              // placeholder='password'
              onChange={passwordSet}
            />
            {/* <button type="submit" className="submit-btn" onClick={handleChange}>SIGN IN</button> */}            
              <Button type="submit">Sign In</Button>            
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
