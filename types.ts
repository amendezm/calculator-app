const keys = [
  "7",
  "8",
  "9",
  "del",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "x",
  "reset",
  "=",
] as const;

export type KeyType = typeof keys[number];
