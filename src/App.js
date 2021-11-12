import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllServices from "./Pages/AllServices/AllServices/AllServices";
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/allservices'>
            <AllServices></AllServices>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
