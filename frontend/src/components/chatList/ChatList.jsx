import { Link } from "react-router-dom";

import "./chatList.css";
const ChatList = () => {
  return (
    <div className="chatList">
      <div>
        <span>Dashbaord</span>
        <Link to="/dashboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#F3F3F3"
          >
            <path d="M460-300h40v-160h160v-40H500v-160h-40v160H300v40h160v160Zm20.13 180q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
          Create a new Chat
        </Link>
        <Link to="/dashboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#F3F3F3"
          >
            <path d="m286.15-286.15 252.31-135.39 135.39-252.31-252.31 135.39-135.39 252.31ZM480-440q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm.13 320q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
          Explore More
        </Link>
      </div>
      <hr />
      <span>Recent Chats</span>

      <div className="list">
        <Link to="/dashboard">MY chat title</Link>
        <Link to="/dashboard">MY chat title</Link>
        <Link to="/dashboard">MY chat title</Link>
        <Link to="/dashboard">MY chat title</Link>
        <Link to="/dashboard">MY chat title</Link>
        <Link to="/dashboard">MY chat title</Link>
        <Link to="/dashboard">MY chat title</Link>
      </div>
      <hr />
      <div className="prouser">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          class="icon-sm shrink-0"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M12.5 3.443a1 1 0 0 0-1 0L4.84 7.29a1 1 0 0 0-.5.866v7.69a1 1 0 0 0 .5.866l6.66 3.846a1 1 0 0 0 1 0l6.66-3.846a1 1 0 0 0 .5-.866v-7.69a1 1 0 0 0-.5-.866zm-2-1.732a3 3 0 0 1 3 0l6.66 3.846a3 3 0 0 1 1.5 2.598v7.69a3 3 0 0 1-1.5 2.598L13.5 22.29a3 3 0 0 1-3 0l-6.66-3.846a3 3 0 0 1-1.5-2.598v-7.69a3 3 0 0 1 1.5-2.598z"
            clip-rule="evenodd"
          ></path>
          <path
            fill="currentColor"
            d="m9.441 11.445.488-1.464a.338.338 0 0 1 .642 0l.488 1.464c.235.707.79 1.26 1.496 1.496l1.464.488a.338.338 0 0 1 0 .642l-1.464.488c-.707.235-1.26.79-1.496 1.496l-.488 1.464a.338.338 0 0 1-.642 0l-.488-1.464a2.37 2.37 0 0 0-1.496-1.496l-1.464-.488a.338.338 0 0 1 0-.642l1.464-.488a2.37 2.37 0 0 0 1.496-1.496M14.495 8.06l.305-.916a.211.211 0 0 1 .4 0l.305.916c.148.441.494.787.935.935l.916.305a.211.211 0 0 1 0 .4l-.916.305a1.48 1.48 0 0 0-.935.935l-.305.916a.211.211 0 0 1-.4 0l-.305-.916a1.48 1.48 0 0 0-.935-.935l-.916-.305a.211.211 0 0 1 0-.4l.916-.305c.441-.148.787-.494.935-.935"
          ></path>
        </svg>
        <div>
          <p>Upgrade Pro</p>
          <span>Get ADITYA AI PRO</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
