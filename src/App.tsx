import { Routes, Route, BrowserRouter, Outlet } from "react-router";

import "./App.css";

import { HomePage } from "./pages/HomePage";
import { SettingsPage } from "./pages/SettingsPage";
import { ChatPage } from "./pages/ChatPage";

import { useChatsStore } from "./stores/ChatsStore";

import { getUserId } from "./data";
import { getWs } from "./connection";
import { useEffect } from "react";

function Networking() {
  const addMessage = useChatsStore((state) => state.addMessage);

  // TODO: recognise when getWs changes and rerun this
  useEffect(() => {
    getWs().onmessage = (e) => {
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

        const otherUser =
          data.sender == getUserId() ? data.recipient : data.sender;

        const message = {
          sender: data.sender,
          content: data.content,
          timestamp: data.timestamp,
        };

        addMessage(otherUser, data.seq_no, message);
      }
    };
  });

  return <div></div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Networking />
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
