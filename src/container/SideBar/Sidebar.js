import React from "react";
import Constants from "../../componets/Constants/constants";
import { Image } from "react-bootstrap";
import "./SideBar.scss";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="side-panel">
      <ul>
        {Constants.Navigation.map((item, index) => {
          return (
            <li key={item.name + index}>
              <Link to={item.link}>
                <Image src={item.icon} />
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
