function useViewport() {
  const vw = (v: number) => {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    return (v * w) / 100;
  };
  const vh = (v: number) => {
    var w = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (v * w) / 100;
  };
  return [vh, vw];
}

export default useViewport;
