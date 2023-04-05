import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();

  const getIndicator = (password) => {
    let strengthValue = {
      upper: false,
      lower: false,
      numbers: false,
    };

    for (let index = 0; index < password.length; index++) {
      let char = password.charCodeAt(index);
      if (!strengthValue.upper && char >= 65 && char <= 90) {
        strengthValue.upper = true;
      } else if (!strengthValue.numbers && char >= 48 && char <= 57) {
        strengthValue.numbers = true;
      } else if (!strengthValue.lower && char >= 97 && char <= 122) {
        strengthValue.lower = true;
      }
    }

    let indicator = "";
    let count = 0;
    for (let check in strengthValue) {
      if (strengthValue[check] === true) {
        count += 1;
      }
    }
    if (count === 1) {
      indicator = "weak";
    } else if (count === 2) {
      indicator = "medium";
    } else if (count === 3) {
      indicator = "strong";
    }

    return indicator;
  };

  const passwordStrength = getIndicator(password);

  function handleSubmit(e) {
    e.preventDefault();
    
    // check if any fields are missing
    const missingFields = [];
    if (!username) {
      missingFields.push("username");
    }
    if (!email) {
      missingFields.push("email");
    }
    if (!password) {
      missingFields.push("password");
    }
        
    // show error message if any fields are missing
    if (missingFields.length > 0) {
      setSignupError(`Please fill in the following fields: ${missingFields.join(", ")}`);
      return;
    }
  
    // proceed with signup if all fields are filled in
    fetch("https://carrental-1n1b.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password  }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          navigate("/");
        });
      } else {
        setSignupError("Signup failed. Please try again.");
      }
    });
  }
  
  

  return (
    <div id="login-box">
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
  
      <form class="lef" onSubmit={handleSubmit}>
        <div class="left">
          <h1>Sign up</h1>
          {signupError && <div className="SignupError">{signupError}</div>}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <div className={`password-strength ${passwordStrength}`}>
            Password Strength: {passwordStrength}
          </div>
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
          <button type="submit">Sign Up</button>
  
        </div>
        </form>
        <div class="right">
          <span class="loginwith">Sign in with<br />social network</span>
          
          <button class="social-signin facebook"><a href="https://web.facebook.com/?_rdc=1&_rdr" target="blank">Log in with Facebook</a></button>
          <button class="social-signin twitter"><a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="blank">Log in with Twitter</a></button>
          <button class="social-signin google"><a href="https://accounts.google.com/v3/signin/identifier?dsh=S1275354805%3A1680269278964108&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession" target="blank">Log in with Google</a></button>
        </div>
        <div class="or">OR</div>
      </div>
   

      
      );
}

export default SignUp;