import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/css/App.css";

function Header() {
  return (
    <div className="header">
      <div className="titleName">
        <h1 className="title margin">Juan Sebastian Vassallo</h1>
        <h3 className="subtitle margin">Composer</h3>
      </div>
      <div className="headNavBar Buttons "></div>
    </div>
  );
}

export default Header;
