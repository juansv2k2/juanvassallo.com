import { createRoot } from "react-dom/client";
import "../src/css/App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import { motion, AnimatePresence } from "framer-motion";
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
import Texts from "./components/pages/Texts";

const routes = [
  { path: "/", name: "News", Component: Home },
  { path: "/bio", name: "Bio | CV", Component: Bio },
  { path: "/compositions", name: "Compositons", Component: Compositions },
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
            <h3 className="subtitle margin subtitle-desktop">
              Composer | Researcher | Performer
            </h3>
            <h3 className="subtitle margin subtitle-mobile">
              Composer Researcher Performer
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

          {/* Scroll Down Indicator for Mobile/Tablet */}
          <div className="scroll-indicator">
            <span className="scroll-indicator-text">Scroll Down</span>
            <svg className="scroll-arrow" viewBox="0 0 24 24">
              <path d="M12 16l-6-6h12l-6 6z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Framer Motion for smooth route changes */}
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
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Switch location={location}>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path} component={Component} />
          ))}
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

// React 18 render method
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
