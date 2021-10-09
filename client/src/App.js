import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/home/home";
import NavBar from "./components/navbar/navbar";
import Signup from "./components/signup/Signup";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/signin' component={Signup}/>
          {/* define all the routes here */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
