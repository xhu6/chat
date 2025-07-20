import { Routes, Route } from "react-router";

import "./App.css";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";
import { Chat } from "./pages/Chat";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/chat/:userId" element={<Chat />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
