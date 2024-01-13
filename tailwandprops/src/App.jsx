import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-orange-400 text-black p-4 rounded-xl">Dheeraj</h1>
      <Card userName="Dheeraj" btnText="visit" />
      <Card userName="kumawat" btnText="Enter" />
    </>
  );
}

export default App;
