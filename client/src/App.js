import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/home/home";
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* define all the routes here */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
