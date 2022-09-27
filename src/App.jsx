import { useState } from "react";
import "./App.css";
import Slider from "./components/Slider";
import Switch from "./components/Switch";
import { usePlanPrice } from "./hooks/usePlanPrice";

function App() {
  const [value, setValue] = useState(20);
  const [yearly, setYearly] = useState(false);
  const handleRangeChange = (e) => {
    setValue(Number(e.target.value));
  };
  const plan = usePlanPrice(value, yearly);

  return (
    <div className="flex justify-center bg-VeryPaleBlue min-h-screen w-full font-Manrope bg-no-repeat bg-contain  bg-[url('/images/bg-pattern.svg')] ">
      <div className="">
        <div className=" py-8 my-16 px-6 md:px-10 bg-contain text-center bg-center bg-[url('/images/pattern-circles.svg')] bg-no-repeat ">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Simple ,traffic-based pricing
          </h1>
          <p className="mt-6 text-GrayishBlue">
            Sign-up for our 30-days trial.Nocredit card required
          </p>
        </div>
        {/* box */}
        <div className="bg-white text-GrayishBlue px-6 md:px-10  py-12 mb-24 w-ful shadow-lg rounded-xl ">
          <div className="flex md:justify-between justify-center items-center align-middle">
            <h3 className="uppercase tracking-wider">
              {plan?.views} PAGEVIEWS
            </h3>
            <h3 className=" items-center hidden md:flex">
              <span className="inline-block text-DarkDesaturatedBlue text-4xl font-extrabold">
                ${plan?.price.toFixed(2)}
              </span>
              / month
            </h3>
          </div>
          <Slider value={value} handleChange={handleRangeChange} />
          <h3 className=" items-center mt-12 md:hidden justify-center flex">
            <span className="inline-block text-DarkDesaturatedBlue text-4xl font-extrabold">
              ${plan?.price.toFixed(2)}
            </span>
            / month
          </h3>
          <div className="flex  mt-12 items-center  lg:ml-24 md:pl:16 pl-8">
            <Switch handleChange={() => setYearly(!yearly)} />
            <div className="md:px-4 ml-2 px-2 py-0.25 bg-LightRed/25 text-LightRed rounded-xl">
              <p className="text-sm  md:inline-block hidden">25% Discount</p>
              <p className="text-sm md:hidden">-25% </p>
            </div>
          </div>
          <hr className="mt-12 bg-GrayishBlue" />
          <div className="flex flex-col md:flex-row md:justify-between  items-center mt-12 gap-8  ">
            <div className="space-y-4 flex flex-col justify-center md:items-start items-center">
              <div className="flex  justify-start items-center gap-4">
                <img className="" src="/images/icon-check.svg" alt="" />
                <h4 className="text-GrayishBlue">Unlimited websites</h4>
              </div>
              <div className="flex  justify-start items-center gap-4">
                <img className="" src="/images/icon-check.svg" alt="" />
                <h4 className="text-GrayishBlue">100% data ownership</h4>
              </div>
              <div className="flex  justify-start items-center gap-4">
                <img className="" src="/images/icon-check.svg" alt="" />
                <h4 className="text-GrayishBlue">Email reports</h4>
              </div>
            </div>
            <button className="text-PaleBlue bg-DarkDesaturatedBlue px-14 py-3 rounded-3xl transition hover:text-VeryPaleBlue">
              Start my trail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
