import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
  inputChange,
} from "./counterSlice";
import styles from "./Styles.module.css";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const options = {
  title: {
    text: "My chart",
  },
  colorAxis: {
    layout: "vertical",
    showInLegends: true,
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

export function Counter() {
  const count = useSelector(selectCount);
  const searchInput = useSelector((state) => state.counter.searchInput);
  const movieList = useSelector((state) => state.counter.list);
  const [filteredList, setFilteredList] = useState([...movieList]);

  const dispatch = useDispatch();
  const Arr = ["1", 2, "9x", ["5a", 8]];

  const searchHandle = () => {
    const List = movieList.filter((movie) =>
      `${movie.name.toLowerCase()}`.includes(searchInput.toLowerCase())
    );
    setFilteredList(List);

    let res = 0;
    for (let i=0; i < 5; i++) {
      res += i;
    }
    console.log({ res });
  };

  const searchByEnter = (e) => {
    if (e.code === "Enter") {
      searchHandle();
    }
  };

  return (
    <div>
      <div className={styles.row}>
        <div className={styles.searchField}>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => dispatch(inputChange(e.target.value))}
            onKeyDown={(e) => searchByEnter(e)}
          />
        </div>
        <ul className="d-flex">
          {filteredList.map((item) => (
            <li key={item.id} className="d-flex" type="none">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={searchHandle}>search</button>
      <div style={{ width: "600px", height: "200px", margin: "auto" }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}
