import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Main from "./components/Main";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Dolls from "./components/Dolls";
import DollsNav from "./components/Category_Navs/DollsNav";
import ActionFigures from "./components/ActionFigures";
import ActionFiguresNav from "./components/Category_Navs/ActionFiguresNav";
import BuildingToys from "./components/BuildingToys";
import BuildingToysNav from "./components/Category_Navs/BuildingToysNav";
import ChildrenBooks from "./components/ChildrenBooks";
import ChildrenBooksNav from "./components/Category_Navs/ChildrenBooksNav";
import ToyVehicles from "./components/ToyVehicles";
import ToyVehiclesNav from "./components/Category_Navs/ToyVehiclesNav";
import KidsElectronicGames from "./components/KidsElectronicGames";
import KidsElectronicGamesNav from "./components/Category_Navs/KidsElectronicGamesNav";

function App() {

  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/Main"><Navbar /><Main user={user} /></Route>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" render={()=> <Login setUser={setUser}/>} />
          <Route exact path="/Dolls">
            <DollsNav /><Dolls />
          </Route>
          <Route exact path="/ActionFigures">
            <ActionFiguresNav user={user}/><ActionFigures />
          </Route>
          <Route exact path="/BuildingToys">
            <BuildingToysNav user={user}/><BuildingToys />
          </Route>
          <Route exact path="/ChildrenBooks">
            <ChildrenBooksNav user={user}/><ChildrenBooks />
          </Route>
          <Route exact path="/ToyVehicles">
            <ToyVehiclesNav user={user}/><ToyVehicles />
          </Route>
          <Route exact path="/KidsElectronicGames">
            <KidsElectronicGamesNav user={user}/><KidsElectronicGames />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
