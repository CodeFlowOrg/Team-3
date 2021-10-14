import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Shape from "./components/comman/shapes/shape";
import Home from "./components/home/home";
import NavBar from "./components/navbar/navbar";
import Signup from "./components/signup/Signup";
import Order from "./components/Order/Order";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import { Resturant } from "./components/Resturants/Resturants";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          {/* define all the routes here */}
          <Route path="/cart" exact component={Order} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
