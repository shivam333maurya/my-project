import React, { useState } from "react";
import CustomDropdown from "../../componets/Dropdown/index";

const DropDown = (props) => {
  const [data, setData] = useState({ label: "", name: "" });
  const options = [
    { label: "hi", value: 0 },
    { label: "hi1", value: 1 },
    { label: "hi2", value: 2 },
    { label: "hi3", value: 3 },
    { label: "hi4", value: 4 },
    { label: "hi5", value: 5 },
    { label: "hi6", value: 6 },
    { label: "hi7", value: 7 },
    { label: "hi8", value: 8 },
  ];
  const handleChange = (value, name) => {
    const updatedData = {
      ...data,
      [name]: value,
    };
    setData(updatedData);
    console.log("data", updatedData);
  };
  return (
    <div>
      <CustomDropdown
        options={options}
        name="label"
        value={options.find((key) => key.value)}
        onChange={(event) => handleChange(event.target.value, "label")}
      />
      <select
        value={options.find((key) => key.value)}
        onChange={(event) => handleChange(event.target.value, "label")}
      >
        {options.map((key, index) => (
          <option key={index} value={key.label}>
            {key.label}
          </option>
        ))}
      </select>
      <input
        value={data.name}
        type="number"
        name="name"
        onChange={(event) => handleChange(event.target.value, "name")}
      ></input>
    </div>
  );
};

export default DropDown;
