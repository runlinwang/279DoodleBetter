import "./279DoodleMock_files/style.css";
import { useState } from "react";

// main application here
export default function App() {
  // 3 states for yes, no, if need be
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);

  // map index 0 to "x" character, index 1 to "✓" character, and index 2 to "(✓)" characters (for if need be)
  function getChar(ind) {
    var state = ind === 0 ? state1 : ind === 1 ? state2 : state3;
    return state === 0 ? "✕" : state === 1 ? "✓" : "(✓)";
  }

  // map indicies to right colors
  function getBackground(ind) {
    var state = ind === 0 ? state1 : ind === 1 ? state2 : state3;
    return state === 0 ? "#ddffdd" : state === 1 ? "#ffdddd" : "#ffeedd";
  }

  // toggle first state for user
  function toggleState1() {
    setState1((prevState) => (prevState + 1) % 3);
  }

  // toggle second state for user
  function toggleState2() {
    setState2((prevState) => (prevState + 1) % 3);
  }

  // toggle third state for user
  function toggleState3() {
    setState3((prevState) => (prevState + 1) % 3);
  }

  return (
    //blah blah other parts of the website
    <button class="button" onClick={toggleState1} style={{ backgroundColor: getBackground(0) }}>
        {getChar(0)}
    </button>
  );
}