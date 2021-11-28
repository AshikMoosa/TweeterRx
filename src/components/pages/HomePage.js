import React from "react";
import HomeImg from "../../images/homepage.jpg";
import LogoWhite from "../../images/tweeter-white.png";

const HomePage = () => {
  return (
    <section className="homepage-lock">
      <div className="left-col">
        <img src={HomeImg} alt="Home Page Illustration" />
      </div>
      <div className="right-col">
        <img src={LogoWhite} alt="White Logo" />
        <h1>Happening now</h1>
        <h3>Join Tweeter today.</h3>
        <div className="right-col-btn">
          <button>Sign up</button>
          <button>Log in</button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
