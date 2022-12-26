import { Screen } from "./Screen";
import { Keyboard } from "./Keyboard";

const Calculator = () => (
  <div className="flex flex-col">
    <Screen />
    <Keyboard />
  </div>
);

export { Calculator };
