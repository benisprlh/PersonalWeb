import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Project from "./components/Project";

export default function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div>
        <div className="max-w-7xl mx-auto p-5">
          <Navbar />
          <HeroSection />
          <Technologies />
          <Experience />
          <Project />
        </div>
      </div>
    </div>
  );
}
