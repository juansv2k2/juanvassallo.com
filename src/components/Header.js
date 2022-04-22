import { faBorderStyle } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../src/css/App.css";

window.addEventListener("load", (event) => {
    document.body.style.backgroundBlendMode = "overlay";
    const header = document.getElementsByClassName("footer");
    const gallery = document.getElementsByClassName("padding");
    console.log(gallery);
    header[0].style.opacity = 1;
    header[1].style.opacity = 1;
    gallery[0].style.opacity = 1;
});

function Header() {
    return (
        <div className="bodyDiv">
            <div>
                <h1 className="title">Juan Sebastián Vassallo</h1>
                <h2 className="subtitle">composer - music researcher</h2>
            </div>
            <div className="Buttons neonText">
                <Link
                    to="/"
                    exact="true"
                    onClick={() => {
                        document.body.style.backgroundBlendMode = "overlay";
                    }}
                >
                    Home
                </Link>
                <Link
                    to="/bio"
                    exact="true"
                    onClick={() => {
                        document.body.style.backgroundBlendMode = "darken";
                    }}
                >
                    Bio
                </Link>
                <Link
                    to="/cv"
                    exact="true"
                    onClick={() => {
                        document.body.style.backgroundBlendMode = "darken";
                    }}
                >
                    CV
                </Link>

                <Link
                    to="/compositions"
                    exact="true"
                    onClick={() => {
                        document.body.style.backgroundBlendMode = "darken";
                    }}
                >
                    Compositions
                </Link>
                {/* <Link to="/records" exact="true">
                    Records
                </Link> */}
                <Link
                    to="projects"
                    exact="true"
                    onClick={() => {
                        document.body.style.backgroundBlendMode = "darken";
                    }}
                >
                    Projects
                </Link>

                <Link
                    to="/contact"
                    exact="true"
                    onClick={() => {
                        document.body.style.backgroundBlendMode = "darken";
                    }}
                >
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default Header;
