import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Pagination from "../container/Pagination/Pagination";
import Map from "../container/Map";
import Calendar from "../container/Calendar";
import PageNotFound from "../container/PageNotFound";
const Navigation = () => {
  return (
    <Fragment>
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate from="/" to="/pagination" />}
        />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/map" element={<Map />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </Fragment>
  );
};

export default Navigation;
