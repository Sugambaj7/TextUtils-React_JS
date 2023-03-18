import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };
  const handleLowClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleclear = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
  };
  const handleTextSummary = () => {
    //console.log("Uppercase was clicked" + text);
    if (text.length === 0) {
      setCharacters(0);
      setWords(0);
      setReadTime(0);
    } else {
      let characters = text.length;
      setCharacters(characters);
      let words = text.split(" ").length;
      setWords(words);
      let readTime = (text.split(" ").length * 5) / 1500;
      setReadTime(readTime);
    }
  };
  const [text, setText] = useState("");
  const [characters, setCharacters] = useState("");
  const [words, setWords] = useState("");
  const [readTime, setReadTime] = useState("");

  return (
    <>
      <div>
        <div>
          <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
            {props.heading}
          </h1>
        </div>
        <div
          className="form-floating "
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            cols="20"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
              caretColor: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <label htmlFor="mytext">Text Entering Area</label>
        </div>
        <div
          className="my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert To UpperCase
          </button>
        </div>
        <div
          className="my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <button className="btn btn-primary" onClick={handleLowClick}>
            Convert To Lowercase
          </button>
        </div>
        <div
          className="my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <button className="btn btn-primary" onClick={handleclear}>
            Clear
          </button>
        </div>
      </div>

      <div
        className="my-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Preview</h2>
        <p>{text}</p>
      </div>

      <div
        className="my-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <button className="btn btn-primary my-3" onClick={handleTextSummary}>
          Generate
        </button>
        <p>Number of characters in your text: {characters}</p>
        <p>Number of words in your text: {words}</p>
        <p>People can read the entered text in average: {readTime} minutes</p>
      </div>
    </>
  );
}
