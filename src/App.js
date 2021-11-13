import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllServices from "./Pages/AllServices/AllServices/AllServices";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import AddServices from "./Pages/AddServices/AddServices";
import Payments from "./Pages/Payments/Payments";
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
            <PrivateRoute path='/payments'>
              <Payments></Payments>
            </PrivateRoute>
            <Route path='/allservices'>
              <AllServices></AllServices>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/addservice'>
              <AddServices></AddServices>
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
