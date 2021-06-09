import React, { useEffect, useState } from "react";
import Setup from "./components/Setup";
import classes from "./App.module.css";

import useCustomPointer from "./hooks/useCustomPointer";
import ThemeContextProvider from "./context/ThemeContext";
import Main from "./components/Main";
function App() {
  useCustomPointer(["A", "BUTTON"]);
  const [, setVisible] = useState<boolean>(false);
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.style.overflow = "hidden"; //change this later
    window.addEventListener("beforeunload", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }, []);
  return (
    <>
      <ThemeContextProvider>
        <div className={classes.master}>
          <Setup
            toggleMainVisibility={(val) => {
              setVisible(val);
            }}
          />
          <Main />
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;
