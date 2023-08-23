import { Calculator, ThemeSwitcher } from "components";

export const dynamic = "error";

export default function HomePage() {
  return (
    <main className="w-full min-h-[inherit] flex justify-center items-center font-spartan bg-skin-main transition-all duration-200 ease-in-out">
      <div className="flex flex-col w-11/12 sm:min-w-[350px] sm:w-[65vh] max-w-[550px]">
        <CalculatorHeader />
        <Calculator />
      </div>
    </main>
  );
}

const CalculatorHeader = () => (
  <div className="flex justify-between items-center w-full mb-8">
    <h1 className="text-3xl text-skin-switcher font-spartan">calc</h1>
    <ThemeSwitcher />
  </div>
);
