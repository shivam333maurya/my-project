import Demo from "./container/Demo/index";
import Pagination from "./container/Pagination/Pagination";
import Calendar from "./container/Calendar";
import Navigation from "./navigation";
import SideBar from "./container/SideBar/Sidebar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Component, Fragment } from "react";
import Map from "./container/Map";

function App() {
  return (
    <Fragment>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Navigation} />
        </Routes>
      </BrowserRouter> */}
      {/* <SideBar /> */}
      {/* <Demo /> */}
      {/* <BrowserRouter> */}
      {/* <Routes> */}
      {/* <Route exact path="/pagination" component={Pagination} /> */}
      {/* <Route exact path="/" element={<Navigate from="/" to="/calendar" />} /> */}
      {/* <Route exact path="/" component={Calendar} /> */}

      {/* <Pagination /> */}
      {/* <Calendar /> */}
      {/* </Routes> */}
      {/* </BrowserRouter>{" "} */}
      {/* <Navigation /> */}
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
