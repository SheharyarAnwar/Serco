import { useState, useEffect } from "react";

const getDeviceConfig = (width: number) => {
  if (width < 600) {
    return "xs";
  } else if (width >= 600 && width < 960) {
    return "sm";
  } else if (width >= 960 && width < 1280) {
    return "md";
  } else if (width >= 1280) {
    return "lg";
  }
};

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );
  const calcInnerWidth = function () {
    setBrkPnt(getDeviceConfig(window.innerWidth));
  };
  useEffect(() => {
    setBrkPnt(getDeviceConfig(window.innerWidth));
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return brkPnt;
};
export default useBreakpoint;
