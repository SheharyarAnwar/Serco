import React, { useEffect, useRef } from "react";
import classes from "./index.module.css";
import gsap from "gsap";
const renderedPalette = [
  { color: "var(--blue-green)" },
  { color: "var(--blue-purple)" },
  { color: "var(--pink-red)" },
  { color: "var(--red-salmon)" },
  { color: "var(--salmon-orange)" },
];
export interface PaletteProps {
  colorPicked: (val: string) => any;
  style?: React.CSSProperties;
  hoverColor?: string;
}
const Index: React.FC<PaletteProps> = ({ colorPicked, style, hoverColor }) => {
  const refArr = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    gsap.fromTo(
      refArr.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, delay: 0.8 }
    );
  }, []);
  const colors = renderedPalette.map((val, i) => {
    return (
      <button
        ref={(el) => (refArr.current[i] = el)}
        style={{ background: val.color }}
        key={"button" + i}
        className={classes.color}
        onClick={() => colorPicked(val.color)}
      >
        <span style={{ borderColor: hoverColor }} className={classes.after} />
      </button>
    );
  });
  return (
    <div style={style} className={classes.container}>
      {colors}
    </div>
  );
};

export default Index;
