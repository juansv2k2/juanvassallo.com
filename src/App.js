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

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="footer neonText">
                    <Header />
                </div>

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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
