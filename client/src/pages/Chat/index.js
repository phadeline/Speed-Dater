import React from "react";
import Nav from "../../components/Nav";
import auth from "../../utils/auth";

const Chat = () => {
  auth.checkAuth();
  const handleConnectBtn = async () => {};

  const handleEndChat = async () => {};

  const handleNextChat = async () => {};
  return (
    <div>
      <Nav></Nav>
      <div className="chatPage">
        {/* <PartnerInfo />
    <Chat /> */}
        <div className="actions">
          <button className="btn connectBtn">Connect</button>
          <button className="btn endBtn">End Chat</button>
          <button className="btn nextChatBtn">New Chat</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
