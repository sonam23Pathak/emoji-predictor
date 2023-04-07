import React, { useState } from "react";
import "./style.css";

var headingText = "Hiii Sonam";
var color = "red";
var likeCounter = 0;

export default function App() {
  const [likeCounter, setLikeConter] = useState(0);

  function likeClickHandler() {
    var newLikeCounter = likeCounter + 1;
    setLikeConter(newLikeCounter);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
      <button onClick={likeClickHandler}>like me!!</button> {likeCounter}
    </div>
  );
}

/**
 * 
 points to remember

 onClick takes  a function
 class = className
 useState is a fun
 {anything return in this is JS}


 */
