import "./App.css";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/Themebtn";
import Card from "./components/card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // iska context se koi vasta nahi hai
  useEffect(() => {
    // jese hi run hota hai value de deta hai
    document.querySelector("html").classList.remove("light", "dark");
    // pahale se pata nahi konsi value hai isliya remove kar diya add karne ke liye
    // client side par code runho raha hai to iska use kar rahe hai
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]); // thememode dependices hai isme kuch bhi change aaya code vapas rub hoga

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {" "}
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
