import React from "react";
import Link from "../Link";
import classes from "./index.module.css";
interface SectionProps {
  title: string;
  heading: string;
  body: string;
  link?: string;
}

const Index: React.FC<SectionProps> = ({
  children,
  title,
  heading,
  body,
  link,
}) => {
  const linkText = link ? link : "find out more";
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h3 style={{ display: "inline-block" }}>
          <span className={classes.thin}>{title}</span>
          <strong style={{ fontWeight: 800, fontSize: "130%" }}>
            {heading}
          </strong>
          <div className={classes.txt}>
            <p>{body} </p>
          </div>
        </h3>
        <Link
          text={linkText}
          style={{ marginRight: window.innerWidth > 950 ? "auto" : undefined }}
          secondary={"rgba(0,0,0,0.1)"}
          textColor={"var(--black)"}
        />
      </div>
    </div>
  );
};

export default Index;
