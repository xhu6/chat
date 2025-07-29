import { Routes, Route, Outlet } from "react-router";

import "./App.css";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";
import { Chat } from "./pages/Chat";

import { getUserId } from "./data";
import { getWs } from "./connection";
import { ChatsContext, ChatsProvider } from "./contexts/ChatsContext";
import { useContext } from "react";

function Networking() {
  const { addMessage } = useContext(ChatsContext);

  getWs().onmessage = (e) => {
    const data: {
      type: string;
      sender: number;
      recipient: number;
      content: string;
      timestamp: number;
      id: number;
    } = JSON.parse(e.data);

    if (data.sender == getUserId()) {
      addMessage(data.recipient, data.content, data.timestamp);
    } else {
      addMessage(data.sender, data.content, data.timestamp);
    }
  };

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
            <Route path="/chat/:userId" element={<Chat />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
