import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import bg from "./images/background.png"

function App() {
  return (
    <Router>
      <div >
        <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
