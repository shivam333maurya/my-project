import React, { useState, useEffect } from "react";
import "./index.scss";
const CustomDropdown = (props) => {
  const { options, onChange } = props;
  const [value, setValue] = useState(options[0]);
  // useEffect(() => {
  //   if (props.value) {
  //     setValue(props.value);
  //   } else {
  //     setValue(options[0]);
  //   }
  // }, [props.value]);

  return (
    <div className="custom-dropdown">
      <select value={options.find((key) => key.value)} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
