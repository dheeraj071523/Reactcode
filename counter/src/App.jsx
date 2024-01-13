import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  const addvalue = () => {
    counter++;
    if (counter > 20) {
      counter = 20;
    }
    setCounter(counter);
  };

  const deletevalue = () => {
    counter--;
    if (counter < 0) {
      counter = 0;
    }
    setCounter(counter);
  };

  return (
    <>
      <h1>hi dheeraj add value</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addvalue}>add value</button>
      <br />
      <button onClick={deletevalue}>remove value</button>
    </>
  );
}

export default App;
