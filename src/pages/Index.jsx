import React, { useEffect } from "react";
import "./spotlight.css";

const Index = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const spotlight = document.querySelector(".spotlight");
      const { clientX, clientY } = e;
      spotlight.style.left = `${clientX}px`;
      spotlight.style.top = `${clientY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center relative overflow-hidden">
      <div className="spotlight"></div>
      <h1 className="text-6xl text-center text-white relative z-10">
        Welcome to the Spotlight Effect
      </h1>
    </div>
  );
};

export default Index;