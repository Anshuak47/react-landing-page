import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/Header";
import Hero from "./components/Hero";

const AppLayout = () => {
  return (
    <div className="app">
      <div className="header bg-[#111111] border-b-2 border-[#0b7325]">
        <Header />
      </div>
      <div className="hero-section">
        <Hero />
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
