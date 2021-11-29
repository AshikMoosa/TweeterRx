import React from "react";
import LogoWhite from "../../images/tweeter-white.png";

const Login = () => {
  return (
    <div className="login-modal container">
      <div className="login-heading">
        <h2 style={{ alignSelf: "baseline", margin: 0, cursor: "pointer" }}>
          <i className="fas fa-times"></i>
        </h2>
        <img src={LogoWhite} alt="White Logo" />
        <h1>Sign in to Tweeter</h1>
      </div>
      <form>
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />

        <button type="submit">Log In</button>
      </form>
      <a
        href="/register"
        style={{ textDecoration: "none", color: "white", cursor: "text" }}
      >
        Don't have an account?{" "}
        <span
          style={{
            textDecoration: "underline",
            color: "#2f80ed",
            cursor: "pointer",
          }}
        >
          {" "}
          Sign up
        </span>
      </a>
    </div>
  );
};

export default Login;
