import React from "react";
import NavLogo from "../../images/tweeter-small.svg";
import ProfileLogo from "../../images/profile1.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>
          <img src={NavLogo} alt="Brand Logo" />
          Tweeter
        </h1>
        <ul className="nav-center">
          <li>Home</li>
          <li>Explore</li>
          <li>Bookmarks</li>
        </ul>

        <div className="profile">
          <img src={ProfileLogo} alt="profile logo" />
          <h3>Xanthe Neal</h3>
          <i className="fas fa-caret-down" style={{ cursor: "pointer" }}></i>
          <ul className="profile-list">
            <li>
              <i className="fas fa-user-circle"></i>My Profile
            </li>
            <li>
              <i className="fas fa-user-friends"></i>Group Chat
            </li>
            <li>
              <i className="fas fa-cog"></i>Settings
            </li>
            <li>
              <i className="fas fa-sign-out-alt"></i>Logout
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
