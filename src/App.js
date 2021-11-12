import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllServices from "./Pages/AllServices/AllServices/AllServices";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
function App() {
  return (
    <div className='App'>
      <AuthProvider>
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
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
