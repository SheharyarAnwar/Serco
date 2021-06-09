import { useEffect, useState } from "react";

function useGradientSlicer(gradientColor: string | undefined) {
  const [left, setLeft] = useState<string>();
  const [right, setRight] = useState<string>();
  useEffect(() => {
    let gColor = gradientColor ? gradientColor : "var(--salmon-orange)";
    let left = "";
    let right = "";
    const computed =
      gColor &&
      window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(gColor?.split("(")[1]?.split(")")[0]);
    const mix = computed?.split(",");
    console.log(computed, "computed");

    console.log(mix, "mi");
    if (process.env.NODE_ENV === "development") {
      left = mix && [mix[1], mix[2], mix[3]].join(",");
      right = mix && [mix[4], mix[5], mix[6].split(")")[0] + ")"].join(",");
    } else {
      left = mix[1];
      right = mix[2].split(")")[0];
    }
    setLeft(left);
    setRight(right);
  }, [gradientColor]);
  return [left, right];
}

export default useGradientSlicer;
