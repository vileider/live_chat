import React from "react";
import "../style/header.css";

function Header() {
  return (
    <header>
      <div className="left">
        <button>Sign Out</button>

        {/* Placeholder for where user photo will go */}
        <div className="user"></div>
      </div>

      <div className="middle">
        <form className="searchBar">
          <input type="text" placeholder="Search..." />
        </form>

        {/* Placeholder for where other users photos will go */}
        <div className="otherUserFlex">
          <p className="otherUsers"></p>
          <p className="otherUsers"></p>
          <p className="otherUsers"></p>
          <p className="otherUsers"></p>
          <p className="otherUsers"></p>
          <p className="otherUsers"></p>
          <p className="otherUsers"></p>
          <p className="otherUsers"></p>
          <p className="otherUsers"></p>
          <p className="otherUsers"></p>
          <p className="otherUsers"></p>
          <p className="otherUsers"></p>
          <p className="otherUsers"></p>
        </div>
      </div>

      <div className="right">
        <button className="newChat">New Chat</button>
        <img src="../../Live Chat User Interface/logo.png" alt="logo" />
      </div>
    </header>
  );
}
export default Header;
