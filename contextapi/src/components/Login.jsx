import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

// login  se data ko ham usercontext file me bhej rahe hai or vaha  se profile me ja raha hai
// yah a par hamane usercontext ke setuser function ka istemal kiya  the data stor eme add karne ke liye
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext); // yaha se data bhejenge

  const handleSumbit = (e) => {
    e.preventDefault(); //jab ham default submit karte hai to value url ke through kahi chali jati usko rokne ke liye ham iska istemal karte hai
    setUser({ username, password }); // yah se data ko lenge or bhejenge // yaha par ham ek objetc ke through value ko store kara rahe hai
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <input
          type="text"
          value={username} // yaha par value ko control karte hai  state ke liye
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        {"   "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={handleSumbit}>sumbit</button>
      </div>
    </>
  );
}

export default Login;
