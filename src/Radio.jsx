import React from "react";

function Radio({ options, value, setValue }) {
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            value={option}
            type="radio"
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
          />
          {option}
        </label>
      ))}
    </>
  );
}

export default Radio;
