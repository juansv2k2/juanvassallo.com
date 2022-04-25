import React from "react";
import ReactDOM from "react-dom";
import "../src/css/App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import { CSSTransition } from "react-transition-group";
import { Container, Navbar, Nav } from "react-bootstrap";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Bio from "./components/pages/Bio";
import Contact from "./components/pages/Contact";
import Compositions from "./components/pages/Compositions";
import Records from "./components/pages/Records";
import Projects from "./components/pages/Projects";
import Cv from "./components/pages/CV";
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch,
} from "react-router-dom";

const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/bio", name: "Bio", Component: Bio },
    { path: "/cv", name: "Cv", Component: Cv },
    { path: "/compositions", name: "Compositions", Component: Compositions },
    { path: "/projects", name: "Projects", Component: Projects },
    { path: "/contact", name: "Contact", Component: Contact },
];

function App() {
    return (
        <Router basename="/">
            <div className="App">
                <div className="header">
                    <div className="titleName">
                        <h1 className="title margin">
                            Juan Sebastián Vassallo
                        </h1>
                        <h2 className="subtitle margin">Composer</h2>
                    </div>
                    <div className="headNavBar buttons">
                        {routes.map((route) => (
                            <NavLink
                                key={route.path}
                                as={NavLink}
                                to={route.path}
                                activeClassName="active"
                                exact
                            >
                                <h3>{route.name}</h3>
                            </NavLink>
                        ))}
                    </div>
                </div>

                <div>
                    {routes.map(({ path, Component }) => (
                        <Route key={path} exact path={path}>
                            {({ match }) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={100}
                                    classNames="mainWrapper opac"
                                    unmountOnExit
                                >
                                    <div className="mainWrapper opac">
                                        <Component />
                                    </div>
                                </CSSTransition>
                            )}
                        </Route>
                    ))}
                </div>

                <div className="footer neonText">
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
