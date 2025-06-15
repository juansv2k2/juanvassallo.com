import React from "react";
import ReactDOM from "react-dom";
import "../src/css/App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Bio from "./components/pages/Bio";
import Contact from "./components/pages/Contact";
import Compositions from "./components/pages/Compositions";
import Records from "./components/pages/Records";
import Cv from "./components/pages/CV";
import Texts from "./components/pages/Texts";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/bio", name: "Bio", Component: Bio },
  { path: "/cv", name: "CV", Component: Cv },
  { path: "/compositions", name: "Works", Component: Compositions },
  { path: "/records", name: "Records", Component: Records },
  { path: "/texts", name: "Texts", Component: Texts },
  { path: "/contact", name: "Contact", Component: Contact },
];

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <div className="header">
          <div className="titleName">
            <h1 className="title margin">Juan Sebastián Vassallo</h1>
            <h3 className="subtitle margin">
              Composer | Researcher | Developer
            </h3>
          </div>
          <div className="headNavBar buttons">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                activeClassName="active"
                exact
              >
                <h3>{route.name}</h3>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Transition Group for smooth route changes */}
        <MainContent />

        <div className="footer neonText">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <TransitionGroup className="mainWrapper">
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path} component={Component} />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
