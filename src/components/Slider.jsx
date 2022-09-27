import React, { useLayoutEffect, useRef, useState } from "react";

const Slider = ({ value, handleChange }) => {
  const inputRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(inputRef.current.offsetWidth);
    window.addEventListener("resize", () =>
      setWidth(inputRef.current.offsetWidth)
    );
    return () => {
      window.removeEventListener("resize", () =>
        setWidth(inputRef.current.offsetWidth)
      );
    };
  }, []);
  return (
    <div className="w-full relative mt-12">
      <input
        ref={inputRef}
        type="range"
        className="slider"
        max={100}
        min={0}
        step={25}
        onChange={handleChange}
        value={value}
      />
      <span
        className="track"
        style={{ width: (value * (width - 40)) / 100 }}
      ></span>
    </div>
  );
};

export default Slider;
