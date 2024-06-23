import chatbot from "../assets/chatbot1.svg";
// function ChatBot() {
//   return (
//     <button onClick={ChatBox}>
//       <ul className="fixed right-5 bottom-5 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex z-50 px-5 py-5">
//         <img src={chatbot} width={24} height={25} alt="" />
//       </ul>
//     </button>
//   );
// }
import React, { useState } from "react";
import Button from "./common/Button";
import "./ChatBotStyle.css";
const ChatBot = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const [currentOptions, setCurrentOptions] = useState([]);

  const data = {
    chatinit: {
      title: [
        "Hello <span class='emoji'> &#128075;</span>",
        "Team DEVx AVES here",
        "What do you want to know?",
      ],
      options: ["What is Fundex?", "Why Us?", "Who are we?"],
    },
    what_is_fundex: {
      title: [
        "FundeX is a Web3 project designed to make Donations FAST, SECURE & TRANSPARENT using Cryptocurrency on the Blockchain.",
      ],
      options: ["What is Fundex?", "Why Us?", "Who are we?"],
      url: {},
    },
    why_us: {
      title: [
        "1.Smart Contracts to provide encrypted transactions\n2.Seamless workflow\n3.Direct & Secure money transfers",
      ],
      options: ["What is Fundex?", "Why Us?", "Who are we?"],
      url: {},
    },
    who_are_we: {
      title: [
        "We are Team DEVx AVES dedicated to embrace futureproof technologies for an advanced future.",
      ],
      options: ["What is Fundex?", "Why Us?", "Who are we?"],
      url: {},
    },
  };

  const showChatBot = () => {
    if (!showChat) {
      setShowChat(true);
      initChat();
    } else {
      window.location.reload();
    }
  };

  const initChat = () => {
    const titles = data.chatinit.title;
    const len1 = titles.length;
    setMessages([]);

    titles.forEach((title, index) => {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: title, isBot: true },
        ]);
      }, index * 500);
    });

    setTimeout(() => {
      setCurrentOptions(data.chatinit.options);
    }, (len1 + 1) * 500);
  };

  const handleOpt = (option) => {
    option = option.slice(0, option.length - 1);
    option = option.replace(/ /g, "_");
    const findText = option.split(" ")[0];
    const tempObj = data[findText.toLowerCase()];
    setMessages([...messages, { content: option, isBot: false }]);
    handleResults(tempObj.title, tempObj.options, tempObj.url);
  };

  const handleResults = (title, options, url) => {
    title.forEach((titleItem, index) => {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: titleItem, isBot: true },
        ]);
      }, index * 500);
    });

    if (Object.keys(url).length === 0) {
      setTimeout(() => {
        setCurrentOptions(options);
      }, title.length * 500);
    } else {
      setTimeout(() => {
        handleOptions(options, url);
      }, title.length * 500);
    }
  };

  const handleOptions = (options, url) => {
    const optionLinks = options.map((option, index) => (
      <a key={index} className="m-link" href={url.link[index]}>
        {option}
      </a>
    ));

    const moreLink = url.more ? (
      <a key="more" className="m-link" href={url.more}>
        See more
      </a>
    ) : null;

    setOptions([...optionLinks, moreLink]);
  };

  const renderMessages = messages.map((message, index) => {
    var modifiedContent;
    message.isBot
      ? (modifiedContent = message.content)
      : (modifiedContent = message.content.replace(/_/g, " ") + "?");

    return (
      <p
        key={index}
        className={message.isBot ? "msg" : "rep"}
        dangerouslySetInnerHTML={{ __html: modifiedContent }}
      />
    );
  });

  const renderOptions = currentOptions.map((option, index) => (
    <span key={index} className="opt" onClick={() => handleOpt(option)}>
      <div>{option}</div>
    </span>
  ));

  return (
    <div>
      <button
        className="fixed right-5 bottom-5 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex z-50 px-5 py-5"
        id="init"
        onClick={showChatBot}
      >
        {/* {showChat ? "CLOSE CHAT" : "START CHAT"} */}
        <img
          src={chatbot}
          width={24}
          height={25}
          alt=""
          className="h-full w-full"
        />
      </button>
      {showChat && (
        <div
          id="chatbox-container"
          className="fixed right-5 bot-top-100 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex z-50 px-5 py-5 flex-col max-w-sm"
        >
          <div id="chat-box">{renderMessages}</div>
          {renderOptions}
        </div>
      )}
    </div>
  );
};

export default ChatBot;
