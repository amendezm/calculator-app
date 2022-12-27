import { Textfit } from "react-textfit";

import { useCalculatorContext } from "context";

const Screen = () => {
  const { value, expression } = useCalculatorContext();

  return (
    <div className="relative flex items-center justify-end bg-skin-screen w-full h-28 sm:h-32 rounded-xl mb-6 p-4">
      <span className="absolute top-2 right-2 text-skin-switcher text-right text-xs opacity-60">
        {expression}
      </span>
      <Textfit
        className="text-skin-switcher text-right text-5xl w-full"
        mode="single"
        forceSingleModeWidth={false}
        min={30}
        max={48}
      >
        {value}
      </Textfit>
    </div>
  );
};

export { Screen };
