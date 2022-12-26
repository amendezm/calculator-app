import classNames from "classnames";
import { FC } from "react";

import { KEY_VALUES } from "constant";

const Keyboard = () => {
  return (
    <section className="grid grid-cols-4 gap-4 sm:gap-5 py-4 xs:py-6 px-4 xs:px-6 bg-skin-keypad w-full rounded-xl">
      {KEY_VALUES.map((value, index) => (
        <Key key={index} value={value} />
      ))}
    </section>
  );
};

interface IKeyProps {
  value: string;
}

const Key: FC<IKeyProps> = ({ value }) => {
  const isEqualKey = value === "=";
  const isResetOrEqualKey = ["=", "reset"].includes(value);
  const isResetOrDelKey = ["del", "reset"].includes(value);

  return (
    <button
      className={classNames(
        "bg-skin-key-muted text-skin-primary shadow-muted rounded-lg h-12 xs:h-16 sm:h-12 text-3xl",
        {
          "bg-skin-key-secondary text-skin-equal shadow-secondary": isEqualKey,
          "col-span-2": isResetOrEqualKey,
          "uppercase bg-skin-key-primary text-skin-secondary shadow-primary text-xl":
            isResetOrDelKey,
        }
      )}
    >
      {value}
    </button>
  );
};

export { Keyboard };
