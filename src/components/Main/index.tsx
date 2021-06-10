import React, { useEffect } from "react";
import Header from "../Header";
import Landing from "../Landing";
import classes from "./index.module.css";
import { sectionData } from "../sections";
import { miniSectionData } from "../sections";
import Section from "../Section";
import Wheel from "../Wheel";
import gsap from "gsap";

import { ReactComponent as Play } from "../../assets/play.svg";
import { ReactComponent as Social } from "../../assets/social.svg";
import { ReactComponent as Speed } from "../../assets/speed.svg";
import useGradientSlicer from "./../../hooks/useGradientSlicer";
import { themeContext } from "./../../context/ThemeContext";
import MiniSection from "../Section/MiniSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "../Slider";
import Link from "../Link";
import Footer from "../Footer";
import useBreakpoint from "./../../hooks/useBreakpoint";
import useViewport from "./../../hooks/useViewport";
function Index() {
  const ctx = React.useContext(themeContext);
  const ref = React.useRef<HTMLDivElement>(null);
  const gradient = ctx?.theme?.color;
  const [left, right] = useGradientSlicer(gradient);
  const size = useBreakpoint();
  const [vh, ,] = useViewport();

  const diameter = Math.max(window.innerHeight, window.innerWidth) * 1.5;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#surprise",
        start: "bottom bottom",
        endTrigger: "#blackend",
        end: "bottom bottom",
        scrub: true,
        // pinSpacing: false,
      },
    });
    t1.duration(4);
    //pin black dot
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#blackor",
        start: "center center",
        endTrigger: "#giga",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        // pinSpacing: false,
      },
    });
    t2.play();
    //pin left-text
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#tailortext",
        // start: "center center",

        start:
          size === "xs"
            ? `bottom +=${vh(30)}px`
            : size === "sm"
            ? `bottom +=${vh(30)}px`
            : "center center",
        endTrigger: "#giga",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
    t3.play();
    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#surprise",
        start: "bottom bottom",
        endTrigger: "#blackend",
        end: "bottom bottom",
        scrub: true,
        // pinSpacing: false,
      },
    });
    // "top center" means "when the top of the trigger
    // hits the center of the scroller" (and the scroller is the viewport by default)
    //end trasition for black circle
    const t5 = gsap.timeline({
      scrollTrigger: {
        trigger: "#preGiga",
        start: "center bottom",
        endTrigger: "#giga",
        end: "center bottom",
        scrub: true,
      },
    });
    t1.to("#yon1", {
      duration: 4,
      scale: 0,
    });
    t1.to(
      "#wheel",
      {
        scale: 0,
        duration: 1,
        opacity: 0.5,
      },
      "<"
    );
    t1.to(
      "#blackor",
      {
        scale: 1,
        duration: 1,
        ease: "linear",
      },
      "<"
    );
    t1.fromTo(
      "#tailortext > h3",
      { xPercent: 50, opacity: 0 },
      { xPercent: 0, opacity: 1, duration: 1 },
      "<"
    );
    t1.to(
      "#sec-svg",
      {
        opacity: 1,
        rotate: 180,
        strokeDasharray: "300 999",
        duration: 1,
      },
      "<"
    );
    const children = ref.current && Array.from(ref?.current?.children);
    const duration = 0.375;
    children?.forEach((val, i) => {
      t4.to(
        val,
        {
          opacity: 1,
          scale: 1,
          duration: i === 0 ? duration * 2 : duration,
          // delay: i === 0 ? duration : 0,
        },
        "<"
      );
      if (i !== 2)
        t4.to(val, {
          opacity: 0,
          scale: 0,
          duration: duration,
          delay: duration,
        });
    });

    //end
    t5.to("#svgContainer ", { scale: 0, opacity: 0 });
    t5.to("#blackor", { opacity: 0 });
    t5.to("#tailortext h3", { opacity: 0 }, "<");
    t5.to("#sec-svg ", { scale: 0 }, "<");
    //mark
    gsap.to("#mark", {
      rotate: "-=360_ccw",
      repeat: -1,
      ease: "linear",
      duration: 8,
    });
  }, [size, vh]);
  return (
    <>
      <div className={classes.container}>
        <Header />
        <Landing />
        <div id="trigger" className={classes.scrollContainer}>
          <Wheel />
          {sectionData.map((val, i) => (
            <Section
              key={i}
              body={val.body}
              title={val.title}
              heading={val.heading}
            />
          ))}
        </div>
        <div id="surprise" className={classes.surprise}>
          <div id="tailortext" className={classes.tailorWrapper}>
            <h3>The tailor made site</h3>
            <div ref={ref} id="svgContainer" className={classes.svgContainer}>
              <Play />
              <Social />
              <Speed />
            </div>
            <div className={classes.dashArray}>
              <svg id="sec-svg" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="grd" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop data-color-c="l" offset="0%" stopColor={left}></stop>
                    <stop
                      data-color-c="r"
                      id=""
                      offset="100%"
                      stopColor={right}
                    ></stop>
                  </linearGradient>
                </defs>
                <circle
                  stroke="url(#grd)"
                  fill="none"
                  cx="50"
                  cy="50"
                  r="48"
                ></circle>
              </svg>
            </div>
          </div>
          <div
            id="blackor"
            style={{ height: diameter, width: diameter }}
            className={classes.blackOrigin}
          ></div>
        </div>
        <div id="blackend">
          {miniSectionData.map((val, i) => (
            <MiniSection
              key={i}
              body={val.body}
              heading={val.heading}
              title={val.title}
            />
          ))}
        </div>
        <div id="preGiga" className={classes.preProjects}></div>
        <div
          id="giga"
          style={{ backgroundColor: "var(--grey)" }}
          className={classes.projects}
        >
          <Slider>
            <div className={classes.mark}>
              <svg id="mark" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="c-1"
                    d="M 50, 50m -25, 0 a 25,25 0 1,1 50,0 a 25,25 0 1,1-50,0"
                  ></path>
                </defs>
                <text fontSize="8">
                  <textPath xlinkHref="#c-1">
                    Découvrez nos études de cas
                  </textPath>
                </text>
              </svg>
            </div>
          </Slider>
        </div>
        <div
          className={classes.callOfAction}
          style={{ background: ctx?.theme?.color }}
        >
          <h2>
            <strong>Don't wait!</strong>
            <small>Give life to your communication</small>
          </h2>
          <Link
            text={"Start the adventure"}
            primary="var(--black)"
            secondary={"rgba(0,0,0,0.1)"}
            textColor="var(--grey)"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Index;
