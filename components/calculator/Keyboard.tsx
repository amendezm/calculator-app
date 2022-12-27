import classNames from "classnames";
import { FC } from "react";

import { KEY_VALUES } from "constant";
import { useCalculatorContext } from "context";
import { KeyType } from "types";

const Keyboard = () => {
  return (
    <section className="grid grid-cols-4 gap-4 sm:gap-6 py-4 xs:py-6 sm:py-8 px-4 xs:px-6 sm:px-8 bg-skin-keypad w-full rounded-xl">
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
        "bg-skin-key-muted text-skin-primary shadow-muted rounded-lg h-12 xs:h-16 sm:h-16 text-3xl hover:brightness-150",
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
