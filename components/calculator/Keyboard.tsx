"use client";

import classNames from "classnames";
import { FC } from "react";

import { KEY_VALUES } from "constant";
import { useCalculatorContext } from "context";
import { KeyType } from "types";

const Keyboard = () => {
  return (
    <section className="h-[55vh] min-h-[340px] max-h-[480px] grid grid-cols-4 gap-4 sm:gap-[2.5vh] p-4 sm:p-6 bg-skin-keypad w-full rounded-xl">
      {KEY_VALUES.map((value, index) => (
        <Key key={index} value={value} />
      ))}
    </section>
  );
};

interface IKeyProps {
  value: KeyType;
}

const Key: FC<IKeyProps> = ({ value }) => {
  const { handleKeyPress } = useCalculatorContext();

  const isEqualKey = value === "=";
  const isResetOrEqualKey = ["=", "reset"].includes(value);
  const isResetOrDelKey = ["del", "reset"].includes(value);

  return (
    <button
      className={classNames(
        "bg-skin-key-muted text-skin-primary shadow-muted rounded-lg h-auto text-4xl hover:brightness-150",
        {
          "bg-skin-key-secondary text-skin-equal shadow-secondary": isEqualKey,
          "col-span-2": isResetOrEqualKey,
          "uppercase bg-skin-key-primary text-skin-secondary shadow-primary text-xl":
            isResetOrDelKey,
        }
      )}
      onClick={() => handleKeyPress(value)}
    >
      {value}
    </button>
  );
};

export { Keyboard };
