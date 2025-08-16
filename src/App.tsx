import { Routes, Route, BrowserRouter, Outlet } from "react-router";

import { NetworkStatus } from "components/NetworkStatus";

import { HomePage } from "pages/home/HomePage";
import { SettingsPage } from "pages/settings/SettingsPage";
import { ChatPage } from "pages/chat/ChatPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <div className="flex h-screen w-screen flex-col bg-slate-900">
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
