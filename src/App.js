//import pages
import AboutUs from "../src/pages/AboutUs";
import Nav from "./components/Nav";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Footer from "./components/Footer";

// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";
import ParticleBackground from "./particles/particleBack";

function App() {
  const location = useLocation();
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <ParticleBackground />

      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <ScrollTop />
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
