import "./App.css";
import { Home } from "./Pages/Home";
import { Settings } from "./Pages/Settings";
import { Chat } from "./Pages/Chat";
import { Routes, Route } from "react-router";

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
