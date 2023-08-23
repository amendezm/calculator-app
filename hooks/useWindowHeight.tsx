import { useSyncExternalStore } from "react";

const useWindowHeight = () => {
  const height = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return { height };
};

const subscribe = (callback: () => void) => {
  window.addEventListener("resize", callback);

  return () => {
    window.removeEventListener("resize", callback);
  };
};

const getSnapshot = () => `${window.innerHeight}`;

const getServerSnapshot = () => "100vh";

export { useWindowHeight };
