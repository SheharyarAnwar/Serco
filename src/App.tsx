import React, { useEffect, useRef, useState } from "react";
import Setup from "./components/Setup";
import classes from "./App.module.css";
// import gsap from "gsap";
import useCustomPointer from "./hooks/useCustomPointer";
import ThemeContextProvider from "./context/ThemeContext";
import Main from "./components/Main";
// import ASScroll from "@ashthornton/asscroll";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
function App() {
  useCustomPointer(["A", "BUTTON"]);
  const [, setVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setupSmoothScroll();
    const body = document.getElementsByTagName("body")[0];
    body.style.overflow = "hidden";
    window.addEventListener("beforeunload", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }, []);
  const setupSmoothScroll = () => {
    // const asscroll = new ASScroll({
    //   disableRaf: true,
    //   containerElement: refContainer.current,
    // });
    // gsap.ticker.add(asscroll.update);
    // gsap.registerPlugin(ScrollTrigger);
    // ScrollTrigger.defaults({ scroller: asscroll.containerElement });
    // ScrollTrigger.scrollerProxy(asscroll.containerElement, {
    //   scrollTop(value) {
    //     if (arguments.length) {
    //       asscroll.currentPos = value!!;
    //       return;
    //     }
    //     return asscroll.currentPos;
    //   },
    //   getBoundingClientRect() {
    //     return {
    //       top: 0,
    //       left: 0,
    //       width: window.innerWidth,
    //       height: window.innerHeight,
    //     };
    //   },
    // });
    // asscroll.on("update", ScrollTrigger.update);
    // ScrollTrigger.addEventListener("refresh", asscroll.resize);
    // requestAnimationFrame(() => {
    //   asscroll.enable({
    //     newScrollElements: [ref.current],
    //   });
    // });
    // return asscroll;
  };
  return (
    <>
      <ThemeContextProvider>
        <div ref={refContainer} className={classes.master}>
          <Setup
            toggleMainVisibility={(val) => {
              setVisible(val);
            }}
          />
          <div ref={ref}>
            <Main />
          </div>
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;
