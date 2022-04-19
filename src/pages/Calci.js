import React, { useState, useRef } from "react";
import "./Calci.css";

const Calculator = () => {
  const number = [
    "%",
    "(",
    ")",
    "x",

    "7",
    "8",
    "9",
    "/",

    "4",
    "5",
    "6",
    "+",

    "1",
    "2",
    "3",
    "-",

    "AC",
    "0",
    ".",
    "=",
  ];
  const dragItem = useRef();
  const [cal, setCal] = useState("");
  const [result, setResult] = useState(0);

  let count = 0;
  const handleIncreament = (e) => {
    setResult(result + 1);
    let counts = count;
    counts = counts + 1;

    console.log({ counts });
  };

  const handleChange = (e) => {
    if (e.target.name === "AC") {
      const clear = () => {
        setCal("");
        setResult("");
      };
      return clear();
    } else if (e.target.name === "=") {
      const results = () => {
        try {
          setResult(eval(cal).toString());
        } catch {
          setResult("Erorr");
        }
      };
      return results();
    } else {
      const updateCal = () => {
        setCal(cal.concat(e.target.name));
      };
      return updateCal();
    }
  };

  const s = "aaabbbccyyzx";
  let U = "";

  function removeDuplicate(str, n) {
    // Used as index in the modified string
    let index = 0;
    // Traverse through all characters
    for (let i = 0; i < n; i++) {
      // Check if str[i] is present before it
      let j;
      for (j = 0; j < i; j++) {
        if (str[i] == str[j]) {
          break;
        }
      }
      // result.
      if (j == i) {
        str[index++] = str[i];
      }
    }

    U = str.join("").slice(str, index);
  }

  let str = s.split("");
  let n = str.length;

  console.log(removeDuplicate(str, n));

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  // const arr = [
  //   [1, 2, 3],
  //   [4, 5, 6],
  //   [7, 8, 9],
  // ];
  // // 0, 1, 2 - 2, 1, 0;
  // const diagonalsSum = (arr, l) => {
  //   let d1 = 0;
  //   let d2 = 0;
  //   for (let i = 0; i < l; i++) {
  //     for (let j = 0; j < l; j++) {
  //       if (i === j) {
  //         d1 += arr[i][j];
  //       }
  //       if (i + j === l - 1) {
  //         d2 += arr[i][j];
  //       }
  //     }
  //   }
  //   return d1 - d2;
  // };

  // console.log(diagonalsSum(arr, arr.length), arr.length);

  return (
    <div className="calculator">
      <div className="input">{cal.length ? cal : "0"}</div>
      <div className="output">{result}</div>

      <div className="inputs">
        {number.map((item, index) => (
          <div
            key={item}
            className="input-btn"
            type="button"
            style={{ minWidth: "25%" }}
          >
            <button
              key={item}
              name={item}
              onClick={handleChange}
              className={"color" + item}
              value={item}
              draggable
              onDragStart={(e) => dragStart(e, index)}
            >
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Calculator;
