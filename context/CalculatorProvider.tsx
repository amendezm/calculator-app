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

const operators = ["+", "-", "/", "x"];

const CalculatorProvider: FC<ICalculatorProviderProps> = ({ children }) => {
  const [expression, setExpression] = useState("");
  const [value, setValue] = useState("0");

  const handleKeyPress = (keyValue: KeyType) => {
    switch (keyValue) {
      case "+":
      case "-":
      case "x":
      case "/":
        if (!expression.length) {
          setExpression(`${value}${keyValue}`);
          return;
        }
        if (operators.includes(expression.at(-1))) {
          setExpression(
            (expression) => `${expression.slice(0, -1)}${keyValue}`
          );
          return;
        }
        setExpression((expression) => `${expression}${keyValue}`);
        return;
      case ".":
        if (value.includes(".")) return;
        setValue((value) => `${value}.`);
        return;
      case "=":
        if (!expression.length) {
          return;
        }
        if (operators.includes(expression.at(-1))) {
          setValue(`${eval(expression.slice(0, -1))}`);
          setExpression("");
          return;
        }
        setValue(`${eval(expression)}`);
        setExpression("");
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
        setExpression("");
        setValue("0");
        return;
      case "0":
        if (value === "0") {
          return;
        }
      default:
        if (countOperators(expression) > 0) {
          const newExpression = `${expression}${keyValue}`.replace(/x/g, "*");
          setExpression((expression) => `${expression}${keyValue}`);
          setValue(`${eval(newExpression)}`);
          return;
        }
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

const countOperators = (expression: string) =>
  expression
    .split("")
    .reduce(
      (acc, operator) => (operators.includes(operator) ? acc + 1 : acc),
      0
    );

const useCalculatorContext = () => useContext(CalculatorContext);

export { CalculatorProvider, useCalculatorContext };
