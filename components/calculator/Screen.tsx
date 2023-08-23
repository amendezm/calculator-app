"use client";

import { Textfit } from "react-textfit";

import { useCalculatorContext } from "context";

const Screen = () => {
  const { value, expression } = useCalculatorContext();

  return (
    <div className="relative flex items-center justify-end bg-skin-screen w-full h-24 sm:h-[16vh] sm:min-h-[90px] sm:max-h-[128px] rounded-xl mb-6 p-4 sm:p-6">
      <span className="absolute top-2 right-2 text-skin-switcher text-right text-xs opacity-60">
        {expression}
      </span>
      <Textfit
        className="text-skin-switcher text-right text-6xl w-full"
        mode="single"
        forceSingleModeWidth={false}
        min={30}
        max={64}
      >
        {value}
      </Textfit>
    </div>
  );
};

export { Screen };
