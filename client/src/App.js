import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Dolls from "./components/Dolls";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Main />
        <Switch>
          <Route exact path="/Dolls">
            <Dolls />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
