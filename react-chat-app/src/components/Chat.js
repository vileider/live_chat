import Header from "./Header.js";
import LeftBar from "./LeftBar.js";
import MessageDisplay from "./MessageDisplay.js";
import Settings from "./Settings.js";
import "../style/chat.css";
import React from "react";
import { useState } from "react";
import switchTheme from "./Chat_functionts/switchtheme.js";
function Chat() {
  const [themeMode, setThemeMode] = useState("dark_mode");

  return (
    <div>
      <div className={`flex_container ${themeMode}`}>
        <div className="chat_header">
          <Header />
        </div>

        <div className="main">
          <div className="left_bar">
            {" "}
            <LeftBar />
          </div>
          <div className="chat_area">
            <div className="message_display">
              <MessageDisplay />
            </div>
          </div>
          <div className="settings">
            <Settings passSwitchTheme={switchTheme} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chat;
