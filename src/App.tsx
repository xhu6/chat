import { useEffect } from "react";
import { Routes, Route, BrowserRouter, Outlet } from "react-router";

import "./App.css";

import { HomePage } from "./pages/HomePage";
import { SettingsPage } from "./pages/SettingsPage";
import { ChatPage } from "./pages/ChatPage";

import { useChatsStore } from "./stores/ChatsStore";
import { useUserIdStore } from "./stores/UserIdStore";
import { useWsStore } from "./stores/WsStore";

function Networking() {
  const addMessage = useChatsStore((state) => state.addMessage);

  const userId = useUserIdStore((state) => state.userId);

  const setURL = useWsStore((state) => state.setURL);
  const setCallback = useWsStore((state) => state.setCallback);

  useEffect(() => {
    setURL(`ws://localhost:8000/ws/${userId}`);

    setCallback((e) => {
      const raw_data = JSON.parse(e.data);

      if (raw_data.type == "recv[direct]") {
        const data: {
          type: string;
          sender: number;
          recipient: number;
          content: string;
          timestamp: number;
          seq_no: number;
        } = raw_data;

        const otherUser = data.sender == userId ? data.recipient : data.sender;

        const message = {
          sender: data.sender,
          content: data.content,
          timestamp: data.timestamp,
        };

        addMessage(otherUser, data.seq_no, message);
      }
    });
  }, [userId]);

  return <div></div>;
}

function NetworkStatus() {
  const connected = useWsStore((state) => state.connected);

  const style = connected
    ? "h-0 bg-green-800 delay-1000"
    : "h-5 bg-black delay-0";

  return (
    <div
      className={`overflow-hidden text-center text-white transition-[height] duration-500 ${style}`}
    >
      {connected ? "Connected" : "Disconnected"}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Networking />
              <NetworkStatus />
              <Outlet />
            </>
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/chat/:userId" element={<ChatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
