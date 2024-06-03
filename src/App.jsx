import React from "react";
import Sidenav from ".//components/Sidenav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"; // Home komponentini to'g'ri import qiling
import About from "./pages/About";
import Settings from "./pages/Settings";
export default function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/about" exact element={<About />}></Route>
            <Route path="/settings" exact element={<Settings />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}
