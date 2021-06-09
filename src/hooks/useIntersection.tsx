import React, { useEffect, useState } from "react";

function useIntersection(ref: React.MutableRefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        // console.log(entry.intersectionRatio, entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.001,
      }
    );
    ref.current && observer.observe(ref.current);
  }, [ref]);
  return isIntersecting;
}

export default useIntersection;
