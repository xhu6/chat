import "./App.css";
import { Home } from "./Pages/Home";
import { Settings } from "./Pages/Settings";
import { Chat } from "./Pages/Chat";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <main className="main-content">
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
