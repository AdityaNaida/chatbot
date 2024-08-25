import { useRef, useEffect } from "react";
import "./chatpage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

export default function ChatPage() {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="chatpage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test message for ai</div>
          <div className="message user">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
            labore? Explicabo nesciunt molestias placeat deserunt porro
            perferendis, rerum quasi maxime recusandae unde sapiente dolores
            doloremque rem cum asperiores dignissimos sequi?
          </div>
          <div className="message">Test message for ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message for ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message for ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message for ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message for ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message for ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message for ai</div>
          <div className="message user">Test message from user</div>

          <NewPrompt />
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
}
