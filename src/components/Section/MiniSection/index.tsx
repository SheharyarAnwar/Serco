import React from "react";
import classes from "./index.module.css";
interface SectionProps {
  title: string;
  heading: string;
  body: string;
}

const Index: React.FC<SectionProps> = ({ children, title, heading, body }) => {
  return (
    <div className={classes.miniSection}>
      <div className={classes.miniContainer}>
        <div>
          <h3 style={{ display: "inline-block" }}>
            <small className={classes.thin}>{title}</small>
            <strong style={{ fontWeight: 800 }}>{heading}</strong>
          </h3>
          <div className={classes.txt}>
            <p>{body} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
