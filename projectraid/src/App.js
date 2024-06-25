import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Planning from "./pages/planning-page/Planning";
import Availability from "./pages/availability-page/Availability";
import Info from "./pages/info-page/Info";
import Settings from "./pages/settings-page/Settings";
import Login from "./pages/login-page/Login";
import Register from "./pages/register-page/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Planning />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/info" element={<Info />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
