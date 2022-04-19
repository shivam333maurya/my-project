import React, { useState, useRef, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Hoc from "../Hoc";
import QRCode from "react-qr-code";
import "./pagination.scss";

const Pagination = () => {
  const [searchInput, setSearchInput] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [selectedPage, setSelectedPage] = useState(1);
  const startPageRef = useRef(selectedPage);

  const list = [
    { name: "hello" },
    { name: "mello" },
    { name: "name" },
    { name: "Shivam" },
    { name: "Rakhsit" },
    { name: "Rohit" },
    { name: "tanaya" },
    { name: "abhijeet" },
    { name: "Ashish" },
    { name: "air" },
    { name: "Mario" },
    { name: "super" },
    { name: "Salt" },
    { name: "Sugar" },
    { name: "Man" },
    { name: "Woman" },
    { name: "Frank" },
    { name: "Japan" },
    { name: "Walt" },
    { name: "hello" },
    { name: "mello" },
    { name: "name" },
    { name: "Shivam" },
    { name: "Rakhsit" },
    { name: "Rohit" },
    { name: "tanaya" },
    { name: "abhijeet" },
    { name: "Ashish" },
    { name: "air" },
    { name: "Mario" },
    { name: "super" },
    { name: "Salt" },
    { name: "Sugar" },
    { name: "Man" },
    { name: "Woman" },
    { name: "Frank" },
    { name: "Japan" },
    { name: "Walt" },
    { name: "hello" },
    { name: "mello" },
    { name: "name" },
    { name: "Shivam" },
    { name: "Rakhsit" },
    { name: "Rohit" },
    { name: "tanaya" },
    { name: "abhijeet" },
    { name: "Ashish" },
    { name: "air" },
    { name: "Mario" },
    { name: "super" },
    { name: "Salt" },
    { name: "Sugar" },
    { name: "Man" },
    { name: "Woman" },
    { name: "Frank" },
    { name: "Japan" },
    { name: "Walt" },
    { name: "Japan" },
    { name: "Walt" },
    { name: "hello" },
    { name: "mello" },
    { name: "name" },
    { name: "Shivam" },
    { name: "Rakhsit" },
    { name: "Rohit" },
    { name: "tanaya" },
    { name: "abhijeet" },
    { name: "Ashish" },
    { name: "air" },
    { name: "Mario" },
    { name: "super" },
    { name: "Salt" },
    { name: "Sugar" },
    { name: "Man" },
    { name: "Woman" },
    { name: "Frank" },
    { name: "Japan" },
    { name: "Walt" },
    { name: "Walt" },
    { name: "Walt" },
    { name: "Walt" },
  ];
  const { first } = list;

  const obj = {
    name: "kncsaca",
    id: 1,
    location: "india",
    status: true,
  };
  const { name, id } = obj;
  console.log("test", name, id);

  const filteredData = list.filter((key) =>
    `${key.name.toLowerCase()}`.includes(searchInput.toLowerCase())
  );
  const offset = pageSize * (selectedPage - 1);
  const totalResult = list.length;
  const outputData = filteredData.slice(offset, offset + pageSize);

  useEffect(() => {
    setPageCount(Math.ceil(filteredData.length / pageSize));
  }, [outputData]);

  const handlePageChange = (value) => {
    let newPage = selectedPage;
    if (value === "next") {
      newPage = newPage + 1 <= pageCount ? newPage + 1 : newPage;
    } else if (value === "previous") {
      newPage = newPage - 1 > 0 ? newPage - 1 : newPage;
    } else {
      newPage = value;
    }
    setSelectedPage(newPage);

    if (pageCount > 5) {
      if (value === "next" && newPage % 5 === 1) {
        startPageRef.current += 5;
      } else if (value === "previous" && newPage % 5 === 0) {
        startPageRef.current -= 5;
      }
    }
  };
  // test area
  // const person = {
  //   name: "John",
  //   age: 30,
  //   city: "New York",
  //   date: new Date(),
  // };
  // const list = ["John", "Peter", "Sally", "Jane"];
  // person.value = "4";
  // let x = "";
  // for (let i in person) {
  //   x += person[i] + " ";
  // }
  // const arr = Object.values(person);
  // const str = JSON.stringify(person);
  // console.log("person", person);

  function vowelsAndConsonants(s) {
    const vowels = "aeiou";

    const c = [],
      v = [];
    for (let i = 0; i < s.length; i++) {
      if (vowels.includes(s[i])) {
        v.push(s[i]);
        console.log(s[i] + "\n");
      } else {
        c.push(s[i]);
        console.log(s[i] + "\n");
      }
    }
    let result = [...v, ...c];
    for (let i of result) {
      console.log(i);
    }
    console.log(v, c);

    return v;
  }

  const s = "javascriptloops";

  vowelsAndConsonants(s);

  // test are end

  return (
    <Hoc className="container">
      <>
        <Row>
          <input
            value={searchInput}
            type="text"
            name="name"
            placeholder="Search"
            onChange={(event) => setSearchInput(event.target.value)}
          ></input>
          <QRCode value="yoo!" bgColor="magenta" size="50" title="Scan me" />
        </Row>
        {/* <Row className="heart">
          <div className="left"></div>
          <div className="right">
            <span>scss</span>
          </div>
        </Row> */}
        {outputData.length ? (
          outputData.map((key, index) => (
            <div style={{ display: "flex", padding: "20px" }} key={index}>
              <h3 style={{ margin: "unset" }}>{index + 1}</h3>
              <span>{key.name}</span>
            </div>
          ))
        ) : (
          <span>No results found</span>
        )}
        {outputData.length ? (
          <Row
            style={{
              marginBottom: "20px",
            }}
            className="pagination"
          >
            <Col md="6">{`Showing ${offset + 1} to ${
              offset + outputData.length
            }`}</Col>
            <Col
              md="6"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                style={{ padding: "10px" }}
                onClick={() => handlePageChange("previous")}
                disabled={selectedPage <= 1}
              >
                Previous
              </Button>
              <div
                style={{
                  padding: "10px",
                  marginInline: "10px",
                  alignItems: "center",
                }}
              >
                {Array.from({
                  length: pageCount > 5 ? 5 : pageCount,
                }).map((_, index) => {
                  const pageNumber = startPageRef.current + index;
                  return (
                    <span
                      key={index}
                      className={` cursor-pointer ${
                        selectedPage === pageNumber && "active"
                      } `}
                      style={{
                        padding: "9px 13px",
                        fontWeight: "600",
                      }}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </span>
                  );
                })}
              </div>
              <Button
                style={{ padding: "10px" }}
                onClick={() => handlePageChange("next")}
                disabled={offset + outputData.length === filteredData.length}
              >
                Next
              </Button>
            </Col>
          </Row>
        ) : null}
      </>
    </Hoc>
  );
};

export default Pagination;
