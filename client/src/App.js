import React, {useState} from "react";
import { withRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Checkout from "./components/Checkout/Checkout";
import CheckoutHeader from "./components/Checkout/checkoutHeader";


function App() {

  const [user, setUser] = useState(null)
  

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" render={(props)=> <Login history={props.history} setUser={setUser}/>} />
        {user ? ( 
          <>
          <Route exact path="/Main"><Navbar /><Main user={user} /></Route>
          <Route exact path="/Dolls">
            <DollsNav user={user}/><Dolls user={user}/>
          </Route>
          <Route exact path="/ActionFigures">
            <ActionFiguresNav user={user}/><ActionFigures user={user}/>
          </Route>
          <Route exact path="/BuildingToys">
            <BuildingToysNav user={user}/><BuildingToys user={user}/>
          </Route>
          <Route exact path="/ChildrenBooks">
            <ChildrenBooksNav user={user}/><ChildrenBooks user={user}/>
          </Route>
          <Route exact path="/ToyVehicles">
            <ToyVehiclesNav user={user}/><ToyVehicles user={user}/>
          </Route>
          <Route exact path="/KidsElectronicGames">
            <KidsElectronicGamesNav user={user}/><KidsElectronicGames user={user}/>
          </Route>
          <Route exact path="/Checkout" render={(props)=> (
            <>
            <CheckoutHeader user={user}/><Checkout history={props.history} user={user}/>
            </>
          )}/>
          </>
        ):null}
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
