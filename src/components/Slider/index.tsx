import React, { useEffect } from "react";
import classes from "./index.module.css";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
const Index: React.FC = ({ children }) => {
  useEffect(() => {
    gsap.registerPlugin(Draggable);
    Draggable.create("#imgWrapper", {
      type: "x",
      bounds: { left: vw(15), top: 0, width: 0, height: 0 },
    });
  }, []);
  const vw = (v: number) => {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    return (v * w) / 100;
  };
  return (
    <>
      <div className={classes.pinner}>
        <div>{children}</div>
      </div>
      <div id="imgWrapper" className={classes.imgWrapper}>
        {[0, 1, 2].map((val, i) => (
          <div className={classes.imgContainer}>
            <div className={classes.img}>
              <div className={classes.text}></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;
