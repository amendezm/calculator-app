import { useEffect, useState } from "react";

const useWindowHeight = () => {
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const onResize = () => {
      setHeight(window.innerHeight);
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return { height };
};

export { useWindowHeight };
