import React, { useMemo } from "react";

function useCustomPointer(targetElements: Array<String>) {
  const pointerOffset = 10;
  useMemo(() => {
    const body = document.getElementsByTagName("body")[0];
    const pointer = document.createElement("div");
    pointer.classList.add("pointer");
    body.appendChild(pointer);
    body.addEventListener("mousemove", (a) => {
      // console.log(a.clientX, a.clientY);
      pointer.style.top = a.pageY - pointerOffset + "px";
      pointer.style.left = a.pageX - pointerOffset + "px";
    });
    body.addEventListener("mouseover", (a) => {
      //@ts-ignore
      // console.log(a.target.nodeName);
      //@ts-ignore
      if (targetElements.includes(a.target.nodeName)) {
        pointer.animate(
          [
            {
              transform: "scale(4)",
            },
          ],
          {
            duration: 200,
            fill: "forwards",
          }
        );
      }
    });
    body.addEventListener("mouseout", (a) => {
      //@ts-ignore
      if (targetElements.includes(a.target.nodeName)) {
        pointer.animate(
          [
            {
              transform: "scale(1)",
            },
          ],
          {
            duration: 200,
            fill: "forwards",
          }
        );
      }
    });
  }, [targetElements]);
  return <></>;
}

export default useCustomPointer;
