//On click Join button  button disappear and reveal
//message display
//

import io from "socket.io-client";
import React, { useRef, useState } from "react";
import MessageField from "./messageDiplayChilds/MessageField";

const socket = io.connect("http://localhost:8000");

function MessageDisplay() {
  console.log("bad render");
  const [toggleMessageDisplay, setToggleMessageDisplay] = useState(false);

  const [username, setUsername] = useState("");

  const [chatLog, setChatLog] = useState([]);

  const counter = useRef(0);

  const loginScreen = (
    <div className="name-container">
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        type="text"
        className="user-name"
        style={{ marginTop: "150px" }}
      />
      <button
        className="join-button"
        onClick={() => {
          setToggleMessageDisplay(true);
        }}
      >
        Join
      </button>
    </div>
  );

  const sendMessage = async (sendingMessage) => {
    if (sendingMessage) {
      console.log(sendingMessage);
    }
    if (sendingMessage !== "") {
      const d = new Date();
      const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
      const date = `${d.getFullYear()}:${d.getMonth() + 1}:${d.getDate()}`;
      const messageData = {
        date: date + " " + time,
        user: username,
        text: sendingMessage,
      };

      console.log(messageData);
      await socket.emit("message", messageData);

    }
    await socket.on("message:received", (data) => {
      console.log(data, chatLog.length);
      setChatLog(data.reverse());
      console.log("from server", data, chatLog);
    });
  };

  const adToCounter = () => {
    counter.current = counter.current + 1;
    return counter.current;
  };

  const shownicelyOnChat = () => {
    return chatLog.map((x) => {
      console.log(x.time_stamp + adToCounter());
      return (
        <div key={x.time_stamp + adToCounter()}>
          {JSON.stringify(x.sender + ": " + x.content)}
        </div>
      );
    });
  };

  const chatfield = (
      <div>
        {shownicelyOnChat()}
        <MessageField runSendingMessage={sendMessage} socket={socket} />
      </div>
  );

  return <div>{!toggleMessageDisplay ? loginScreen : chatfield}</div>;
}
export default MessageDisplay;
