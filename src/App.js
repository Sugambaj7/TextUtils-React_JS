import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar aboutme="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter a text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
