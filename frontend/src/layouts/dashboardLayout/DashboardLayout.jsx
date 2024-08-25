import { Outlet, useNavigate } from "react-router-dom";
import "./dashboardLayout.css";
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import ChatList from "../../components/chatList/ChatList";

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return "Loading...";

  return (
    <div className="dashboard">
      <div className="chatlist">
        <ChatList />
      </div>
      <div className="chatbox">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
