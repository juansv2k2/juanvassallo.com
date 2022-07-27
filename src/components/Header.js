import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/css/App.css";

function Header() {
    return (
        <div className="header">
            <div className="titleName">
                <h1 className="title margin">Juan Sebastián Vassallo</h1>
                <h2 className="subtitle margin">
                    Composer - Artistic Researcher
                </h2>
            </div>
            <div className="headNavBar Buttons ">
                {/* <NavLink to="/" exact="true">
                    <h3>Home</h3>
                </NavLink>
                <NavLink to="/bio" exact="true" activeClassName="active">
                    <h3>Bio</h3>
                </NavLink>
                <NavLink to="/cv" exact="true" activeClassName="active">
                    <h3>CV</h3>
                </NavLink>

                <NavLink
                    to="/compositions"
                    exact="true"
                    activeClassName="active"
                >
                    <h3>Compositions</h3>
                </NavLink>

                <NavLink to="projects" exact="true" activeClassName="active">
                    <h3>Projects</h3>
                </NavLink>

                <NavLink to="/contact" exact="true" activeClassName="active">
                    <h3>Contact</h3>
                </NavLink> */}
            </div>
        </div>
    );
}

export default Header;
