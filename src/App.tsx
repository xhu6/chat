import { Routes, Route, Outlet } from "react-router";

import "./App.css";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";
import { ChatPage } from "./pages/ChatPage";

import { getUserId } from "./data";
import { getWs } from "./connection";
import { ChatsContext, ChatsProvider } from "./contexts/ChatsContext";
import { useContext, useEffect } from "react";

function Networking() {
  const { addMessage } = useContext(ChatsContext);

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
    <div>
      <main>
        <Routes>
          <Route
            element={
              <ChatsProvider>
                <Networking />
                <Outlet />
              </ChatsProvider>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/chat/:userId" element={<ChatPage />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
