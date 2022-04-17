import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
    return (
        <div className="bodyDiv">
            <div>
                <h1 className="title">Juan Sebastián Vassallo</h1>
                <h2 className="subtitle">composer - music researcher</h2>
            </div>
            <div className="Buttons neonText">
                <Link to="/" exact="true">
                    Home
                </Link>
                <Link to="/bio" exact="true">
                    Bio
                </Link>
                <Link to="/cv" exact="true">
                    CV
                </Link>

                <Link to="/compositions" exact="true">
                    Compositions
                </Link>
                {/* <Link to="/records" exact="true">
                    Records
                </Link> */}
                <Link to="projects" exact="true">
                    Projects
                </Link>

                <Link to="/contact" exact="true">
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default Header;
