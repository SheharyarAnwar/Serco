import React, { useContext, useEffect } from "react";
import { themeContext } from "../../context/ThemeContext";
//@ts-ignore
import classes from "./index.module.css";
import gsap from "gsap";
import keyboard from "../../assets/keyboard.png";
import mouse from "../../assets/mouse.png";
import useGradientSlicer from "../../hooks/useGradientSlicer";
function Index() {
  const ctx = useContext(themeContext);
  const gradient = ctx?.theme?.color;
  const [, right] = useGradientSlicer(gradient);
  useEffect(() => {}, [ctx]);
  const createList = (number: number) => {
    return new Array(number).fill(0).map((val, i) => <li></li>);
  };

  useEffect(() => {
    const t1 = gsap.timeline({});
    const t2 = gsap.timeline({});
    gsap.timeline({ repeat: -1 }).add(t1).add(t2, "<");
    t2.to("#scrwrapper", {
      yPercent: -200,
      duration: 10,
      delay: 1.5,
      ease: "linear",
    }).to("#scrwrapper", {
      opacity: 0,
      ease: "linear",
      duration: 0.5,
    });

    t1.fromTo(
      "#scrheader",
      {
        width: 0,
      },
      {
        width: "100%",
        duration: 1.5,
      }
    )
      .fromTo(
        "#scrlogo div",
        { opacity: 0 },
        { delay: 0.1, opacity: 1, stagger: 0.2 },
        "<"
      )
      .fromTo(
        "#scrnavbar span",
        { width: 0 },
        { width: "20%", duration: 1 },
        "-=0.75"
      )
      .fromTo(
        "#scrcontent div",
        { scaleX: 0 },
        { scaleX: 1, duration: 1, stagger: 0.1, transformOrigin: "left" },
        "<"
      )
      .fromTo(
        "#scrtodo",
        { scaleY: 0 },
        { scaleY: 1, transformOrigin: "top", duration: 0.5 },
        "-=0.5"
      )
      .to("#scrtodo", { x: 0, duration: 0.5 })
      .fromTo(
        "#scrtodo ul li",
        { scaleX: 0 },
        { scaleX: 1, stagger: 0.1, transformOrigin: "left" },
        "<"
      )
      .to("#scrcross", { x: 0, duration: 0.5 }, "-=1")
      .fromTo(
        "#scrnote",
        { scaleY: 0 },
        { scaleY: 1, duration: 1, transformOrigin: "top" }
      );
    t1.fromTo(
      "#scrnote1 li",
      { scaleX: 0 },
      { scaleX: 1, transformOrigin: "left", stagger: 0.15 },
      "-=0.5"
    )
      .fromTo(
        "#scrnote2 li",
        { display: "block", scaleX: 0 },
        { scaleX: 1, stagger: 0.15, transformOrigin: "left", xPercent: 112 }
      )
      .to("#notecross", { scaleX: 1, transformOrigin: "right" })
      .fromTo(
        "#scrgrid div",
        { scaleX: 0 },
        { scaleX: 1, transformOrigin: "left", duration: 1 }
      )
      .to("#scrgrid div span", { scale: 1 });
  }, []);
  return (
    <div className={classes.scr}>
      <div className={classes.mainWrapper}>
        <div id="scrwrapper" className={classes.secondaryWrapper}>
          <div className={classes.scrheader}>
            <span id="scrheader" className={classes.overlay}></span>
            <div id="scrlogo" className={classes.scrlogo}>
              <div
                style={{ background: ctx?.theme?.color }}
                className={classes.dot}
              ></div>
              <div
                style={{ background: ctx?.theme?.color }}
                className={classes.dot}
              ></div>
              <div
                style={{ background: ctx?.theme?.color }}
                className={classes.dot}
              ></div>
            </div>
            <div id="scrnavbar" className={classes.navBar}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="scrcontent" className={classes.scrcontent}>
            <div></div>
            <div style={{ background: ctx?.theme?.color }}></div>
            <div style={{ background: ctx?.theme?.color }}></div>
          </div>
          <div className={classes.scrtodowrapper}>
            <div id="scrnote" className={classes.note}>
              <ul id="scrnote1">
                <li
                  style={{ background: ctx?.theme?.color, height: " 2.3%" }}
                ></li>
                <li
                  style={{ background: ctx?.theme?.color, height: " 2.3%" }}
                ></li>
                {createList(10)}
              </ul>
              <ul id="scrnote2" style={{ position: "relative" }}>
                <li
                  style={{ background: ctx?.theme?.color, height: " 2.3%" }}
                ></li>
                <li
                  style={{ background: ctx?.theme?.color, height: " 2.3%" }}
                ></li>
                {createList(10)}
                <span id="notecross" className={classes.notecross}></span>
              </ul>
            </div>
            <div id="scrcross" className={classes.scrcross}></div>
            <div id="scrtodo" className={classes.scrtodo}>
              <ul>
                <li
                  style={{ width: "60%", background: ctx?.theme?.color }}
                ></li>
                {createList(3)}
                <li
                  style={{
                    width: "60%",
                    marginTop: "20%",
                    background: ctx?.theme?.color,
                  }}
                ></li>
                {createList(4)}
              </ul>
            </div>
          </div>
          <div id="scrgrid" className={classes.scrgrid}>
            <div>
              <span style={{ borderColor: right }}></span>
            </div>
            <div>
              <span style={{ borderColor: right }}></span>
            </div>
            <div>
              <span style={{ borderColor: right }}></span>
            </div>
          </div>
          <div className={classes.scrfooter}>
            <div className={classes.scrlogo}>
              <div
                style={{ background: ctx?.theme?.color }}
                className={classes.dot}
              ></div>
              <div
                style={{ background: ctx?.theme?.color }}
                className={classes.dot}
              ></div>
              <div
                style={{ background: ctx?.theme?.color }}
                className={classes.dot}
              ></div>
            </div>
          </div>
          <div className={classes.scrafter}></div>
          <div className={classes.scrbefore}></div>
          <div className={classes.scrend}></div>
        </div>
      </div>
      <img
        src={keyboard}
        alt="keyboard"
        style={{ width: "52%", position: "absolute", bottom: "5%" }}
      ></img>
      <img
        src={mouse}
        alt="mouse"
        style={{
          width: "15%",
          position: "absolute",
          bottom: "-2%",
          right: "31%",
        }}
      ></img>
    </div>
  );
}

export default Index;
