import "../src/css/App.css";
import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Bio from "./components/pages/Bio";
import Contact from "./components/pages/Contact";
import Compositions from "./components/pages/Compositions";
import Records from "./components/pages/Records";
import Projects from "./components/pages/Projects";
import CV from "./components/pages/CV";
import mainWrapper from "./components/mainWrapper";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router basename="/">
            <div className="App">
                <div className="footer ">
                    <Header />
                </div>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/bio">
                        <Bio />
                    </Route>
                    <Route path="/cv">
                        <CV />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/compositions">
                        <Compositions />
                    </Route>
                    <Route path="/records">
                        <Records />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                </Switch>
                <div className="footer neonText">
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
