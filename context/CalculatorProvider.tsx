import { createContext, FC, ReactNode, useContext, useState } from "react";

import { KeyType } from "types";

interface ICalculatorContext {
  expression: string;
  value: string;
  handleKeyPress: (_keyValue: KeyType) => void;
}

const CalculatorContext = createContext<ICalculatorContext | undefined>(
  undefined
);

interface ICalculatorProviderProps {
  children: ReactNode;
}

const CalculatorProvider: FC<ICalculatorProviderProps> = ({ children }) => {
  const [expression, setExpression] = useState("");
  const [value, setValue] = useState("0");

  const handleKeyPress = (keyValue: KeyType) => {
    switch (keyValue) {
      case "+":
      case "-":
      case "x":
      case "/":
        return;
      case ".":
        setValue((value) => `${value}.`);
        return;
      case "=":
        return;
      case "del":
        if (value.length === 1) {
          setValue("0");
          return;
        }
        setValue((value) => {
          const newValue = value.slice(0, -1);
          if (newValue.at(-1) === ",") {
            return newValue.slice(0, -1);
          }
          return newValue;
        });
        return;
      case "reset":
        setValue("0");
        return;
      case "0":
        if (value === "0") {
          return;
        }
      default:
        const numericValue = value.replace(/,/g, "");
        if (numericValue.length === 15) return;

        setValue(parseFloat(`${numericValue}${keyValue}`).toLocaleString());
    }
  };

  return (
    <CalculatorContext.Provider value={{ expression, value, handleKeyPress }}>
      {children}
    </CalculatorContext.Provider>
  );
};

const useCalculatorContext = () => useContext(CalculatorContext);

export { CalculatorProvider, useCalculatorContext };
