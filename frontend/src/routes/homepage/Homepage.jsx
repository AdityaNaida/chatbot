import { useState } from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("bot");

  return (
    <div className="homepage">
      <div className="hero">
        <h1>ADITYA AI</h1>
        <h2>Get answers. Find inspiration. Be more productive.</h2>
        <Link to="/dashboard">
          Start now{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            fill="#000000"
          >
            <path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" />
          </svg>
        </Link>
        <div className="chatbot">
          <img
            src={
              typingStatus === "bot"
                ? "/chatbot.webp"
                : typingStatus === "human1"
                ? "/human1.webp"
                : "/human2.webp"
            }
            alt="chatbot"
            height={30}
            width={30}
            decoding="async"
            loading="lazy"
          />
          <div className="typeholder">
            <TypeAnimation
              sequence={[
                "Ask anything",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "What is LLM?",
                2000,
                () => {
                  setTypingStatus("human1");
                },
                "Large language models",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "What is React.js?",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "A JavaScript Library",
                2000,
                () => {
                  setTypingStatus("bot");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      {/* <Link to="/dashboard">Dashbaord</Link> */}
    </div>
  );
};

export default Homepage;
