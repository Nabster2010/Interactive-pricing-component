import React from "react";

const Switch = ({ handleChange }) => {
  return (
    <>
      <label htmlFor="switch">Monthly Billing</label>
      <label role="label" className="switch mx-4">
        <input
          id="switch"
          type="checkbox"
          className=""
          onChange={handleChange}
        />
        <span className="hand round"></span>
      </label>
      <label htmlFor="switch">Yearly Billing</label>
    </>
  );
};

export default Switch;
