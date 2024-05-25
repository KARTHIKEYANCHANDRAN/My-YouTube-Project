import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div>
      <div className="flex mt-2">
        <img
          className="w-12 h-8"
          alt="userLogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXaqtAkvphSGdnA_nFeGW9valNUy_bs3dqgQ&s"
        />
        <div>
          <span className="font-bold  pr-5">{name}</span>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
