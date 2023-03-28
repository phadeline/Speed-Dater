import React from "react";

const Chat = () => {
  const handleConnectBtn = async () => {};

  const handleEndChat = async () => {};

  const handleNextChat = async () => {};
  return (
    <div className="chatPage">
      <PartnerInfo />
      <Chat />
      <div className="actions">
        <button className="btn connectBtn">Connect</button>
        <button className="btn endBtn">End Chat</button>
        <button className="btn nextChatBtn">New Chat</button>
      </div>
    </div>
  );
};

export default Chat;
