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
  const [text, setText] = useState("");

  return (
    <div>
      <div>
        <h1>{props.heading}</h1>
      </div>
      <div className="form-floating ">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="mybox"
        ></textarea>
        <label htmlFor="mytext">Text Entering Area</label>
      </div>
      <div className="my-3">
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
      </div>
      <div className="my-3">
        <button className="btn btn-primary" onClick={handleLowClick}>
          Convert To Lowercase
        </button>
      </div>
      <div className="my-3">
        <button className="btn btn-primary" onClick={handleclear}>
          Clear
        </button>
      </div>
    </div>
  );
}
