import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../form-input";
import Button from "../ui/button/button";

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
    <div>
      <div className="center">
        <div className="container">
          <form className="sign-in" onSubmit={handleSignUp}>
          <FormInput
              type="text"
              value={name}
              name="email"
              // placeholder='email'
              label="name"
              onChange={nameSet}
            />
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

export default SignUp;
