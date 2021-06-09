import React, { useEffect } from "react";
import classes from "./index.module.css";
import Palette from "../Palette/index";
import gsap from "gsap";
import { themeContext } from "../../context/ThemeContext";
interface SetupProps {
  toggleMainVisibility: (val: boolean) => void;
}

const Index: React.FC<SetupProps> = ({ toggleMainVisibility }) => {
  const ctx = React.useContext(themeContext);

  useEffect(() => {
    gsap.fromTo(
      "#c1",
      { y: -300, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 1 }
    );
    gsap.fromTo("#c2", { opacity: 0 }, { opacity: 1, delay: 1 });
  }, []);
  const onAnimationFinished = (
    val: gsap.core.Omit<gsap.core.Timeline, "then">
  ) => {
    // toggleMainVisibility(true);
    const body = document.getElementsByTagName("body")[0];
    body.style.overflowY = "visible";
    document.documentElement.style.setProperty("--circleSize", "20px");
  };
  const onColorPicked = (val: string) => {
    ctx?.setTheme({ ...ctx.theme, color: val });
    const t1 = gsap.timeline({});
    t1.fromTo(
      "#welcome",
      { visibility: "visible", scaleY: 0, zIndex: 1 },
      {
        scaleY: 1,
        transformOrigin: "50% 100%",
        duration: 1,
        ease: "expo.inOut",
      }
    )
      .to("#c3", {
        scaleY: 0.3,
        transformOrigin: "50% 0%",
        duration: 1,
        ease: "slow",
      })
      .to("#autoplay", {
        scaleY: 0,
        transformOrigin: "50% 0% ",
        duration: 1,
        display: "none",
        ease: "expo.inOut",
      });
    t1.then((val) => onAnimationFinished(val));
    // .to("#c4", { opacity: 0 }, "<");
  };
  return (
    <div id="autoplay" className={classes.main}>
      <div
        style={{ background: ctx?.theme?.color }}
        className={classes.overlay}
        id="welcome"
      >
        <span
          id="c3"
          style={{ background: ctx?.theme?.color, zIndex: 2 }}
          className={classes.textOverlay}
        ></span>
        <h2 id="c4" style={{ position: "relative" }}>
          Welcome
        </h2>
      </div>
      <h2 id="c1">Ready for you tailor-made adventure?</h2>
      <h6 id="c2" style={{ marginTop: "20px", fontWeight: "normal" }}>
        Pick a color to get started:
      </h6>
      <Palette colorPicked={onColorPicked} />
    </div>
  );
};

export default Index;
