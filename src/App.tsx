import { Routes, Route, BrowserRouter, Outlet } from "react-router";

import { Networking } from "./network";
import { NetworkStatus } from "./components/NetworkStatus";

import { HomePage } from "./pages/HomePage";
import { SettingsPage } from "./pages/SettingsPage";
import { ChatPage } from "./pages/ChatPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <div className="flex h-screen w-screen flex-col bg-slate-900">
              <Networking />
              <NetworkStatus />
              <Outlet />
            </div>
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
