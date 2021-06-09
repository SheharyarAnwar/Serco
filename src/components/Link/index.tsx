import React from "react";
import { themeContext } from "./../../context/ThemeContext";
import classes from "./index.module.css";
export interface LinkProps {
  text: string;
  style?: React.CSSProperties;
  primary?: string;
  secondary?: string;
  textColor?: string;
}

const Index: React.FC<LinkProps> = ({
  text,
  style,
  primary,
  secondary,
  textColor,
}) => {
  const ctx = React.useContext(themeContext);
  const color = primary ? primary : ctx?.theme?.color;
  return (
    <div style={style} className={classes.wrapper}>
      <a href="/" className={classes.btn} style={{ color: textColor }}>
        {text}
      </a>
      <div style={{ background: color }} className={classes.underline}></div>
      <div
        style={{ backgroundColor: secondary }}
        className={classes.underlineoverlay}
      ></div>
    </div>
  );
};

export default Index;
