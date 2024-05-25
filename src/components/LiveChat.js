import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeid } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setliveMessage] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      //console.log("API polling");
      dispatch(addMessage({ name: generateRandomName(), message: makeid(10) }));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="ml-28 font-bold">Live Chat</div>
      <div className="ml-1  bg-slate-100 rounded-lg w-3/4 h-[360px] flex flex-col-reverse  overflow-y-scroll ">
        {/* <div className=" border-b bg-white m-0 rounded-lg  p-2 w-[24.5%] fixed">Top Chat </div> */}

        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form onSubmit={e=> {e.preventDefault();
      dispatch(addMessage({
        name:"karthik",
        message:liveMessage,
      }));
      setliveMessage("");
      }
         
      } >
        <input
          className=" border border-black p-2 m-1 w-3/5"
          type="text"
          value={liveMessage}
          onChange={(e) => setliveMessage(e.target.value)}
          placeholder="Type to live chat"
        />
        <button className="bg-green-400 p-2 m-1 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default LiveChat;
