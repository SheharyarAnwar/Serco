import React, { useContext, useEffect, useRef } from "react";
import classes from "./index.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { themeContext } from "./../../context/ThemeContext";
import { ReactComponent as Showcase } from "../../assets/showcase.svg";
import { ReactComponent as Design } from "../../assets/design.svg";
import { ReactComponent as Application } from "../../assets/application.svg";
import { ReactComponent as Marketing } from "../../assets/marketing.svg";
import useBreakpoint from "../../hooks/useBreakpoint";

const Index: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const ctx = useContext(themeContext);
  const size = useBreakpoint();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#trigger",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#trigger",
        start: "top bottom",
        end: "bottom bottom",
        // markers: true,
        scrub: true,
      },
    });
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#trigger",
        start: "top bottom",
        end: "bottom bottom",
        // markers: true,
        scrub: true,
        // onUpdate: (v) => setWheelProgress(v.progress),
      },
    });
    // const t4 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#trigger",
    //     start: "top bottom",
    //     end: "bottom bottom",
    //     // markers: true,
    //     scrub: true,
    //     // onUpdate: (v) => setWheelProgress(v.progress),
    //   },
    // });
    const t5 = gsap.timeline({
      scrollTrigger: {
        trigger: "#trigger",
        start: "bottom bottom",
        endTrigger: "#surprise",
        end: "bottom bottom",
        scrub: true,
      },
    });
    //for pining wheel
    t1.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current!!,
        start:
          size === "xs"
            ? `bottom +=${vw(50 - 25)}px`
            : size === "sm"
            ? `bottom +=${vw(50 - 25)}px`
            : "center center",
        // start: "center center",
        endTrigger: "#blackend",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        // markers: true,
      },
    });
    t1.to(ref.current, {
      rotation: "-=360_ccw",
      ease: "linear",
    });
    // ("top right bottom left");
    const children = ref.current && Array.from(ref.current.children);
    if (children) {
      t2.to(children[0], { scale: 1, ease: "linear", duration: 1 });
      t2.to(children[0], { scale: 0.07, ease: "linear", duration: 1 });
      t2.to(children[1], { scale: 1, ease: "linear", duration: 1 }, "<");
      t2.to(children[1], { scale: 0.07, ease: "linear", duration: 1 });
      t2.to(children[2], { scale: 1, ease: "linear", duration: 1 }, "<");
      t2.to(children[2], { scale: 0.07, ease: "linear", duration: 1 });
      t2.to(children[3], { scale: 1, ease: "linear", duration: 1 }, "<");
      // t2.to(children[3], { scale: 0.07, ease: "linear", duration: 1 });
    }
    t3.to(["#yon1", "#yon2", "#yon3", "#yon4"], {
      rotation: "-=360_cw",
      ease: "linear",
    });
    t4.to("#yon1", { opacity: 1, ease: "linear", duration: 1 })
      .to("#yon1", { opacity: 0, ease: "linear", duration: 1 })
      .to("#yon2", { opacity: 1, ease: "linear", duration: 1 }, "<")
      .to("#yon2", { opacity: 0, ease: "linear", duration: 1 })
      .to("#yon3", { opacity: 1, ease: "linear", duration: 1 }, "<")
      .to("#yon3", { opacity: 0, ease: "linear", duration: 1 })
      .to("#yon4", { opacity: 1, ease: "linear", duration: 1 }, "<");
    // "bottom center" means "when the bottom of the endTrigger hits the center of the scroller".
    //Translate Wheel

    t5.to(ref.current, {
      y: size === "xs" ? "70%" : size === "sm" ? "70%" : undefined,
      x: size === "xs" ? undefined : size === "sm" ? undefined : -vw(50 - 19.5),
      rotate: "-=360_ccw",
      ease: "linear",
      duration: 1,
    })
      .to(children && children[3], { scale: 0.07, duration: 1 }, "<")
      .to(
        children && children[0],
        { transform: "translate(50%,- 50%)", duration: 1, top: "50%" },
        "<"
      )
      .to(
        children && children[1],
        {
          transform: "translate(50% , 50%) scale(0.07)",
          duration: 1,
          right: "50%",
        },
        "<"
      )
      .to(
        children && children[2],
        {
          transform: "translate(- 50% , -50%) ",
          duration: 1,
          bottom: "50%",
        },
        "<"
      )
      .to(
        children && children[3],
        { transform: "translate(- 50% ,-50%)", duration: 1, left: "50%" },
        "<"
      )
      .to("#yon4", { opacity: 0 }, "<");
  }, [size]);

  const vw = (v: number) => {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    return (v * w) / 100;
  };
  return (
    <div ref={ref} id="wheel" className={classes.wheel}>
      <div
        style={{ background: ctx?.theme?.color }}
        className={[classes.innerCircle, classes.top].join(" ")}
      >
        <div id="yon1" className={classes.bottomBox}>
          <Showcase />
        </div>
      </div>
      <div
        style={{ background: ctx?.theme?.color }}
        className={[classes.innerCircle, classes.right].join(" ")}
      >
        <div id="yon2" className={classes.bottomBox}>
          <Design />
        </div>
      </div>
      <div
        style={{ background: ctx?.theme?.color }}
        className={[classes.innerCircle, classes.bottom].join(" ")}
      >
        <div id="yon3" className={classes.bottomBox}>
          <Application />
        </div>
      </div>
      <div
        style={{ background: ctx?.theme?.color }}
        className={[classes.innerCircle, classes.left].join(" ")}
      >
        <div id="yon4" className={classes.bottomBox}>
          <Marketing />
        </div>
      </div>
    </div>
  );
};

export default Index;
