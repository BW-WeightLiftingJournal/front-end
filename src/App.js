import React from 'react';

//components import
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Register from "./components/Register"
// import Landing from "./components/Landing"
import Header from "./components/Header"
import Footer from "./components/Footer"
import RecoverPassword from "./components/RecoverPassword"
import AddExercise from "./components/AddExercise"
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import LuxonUtils from '@date-io/luxon'
import About from "./components/About"

//utilities import
import {Route} from "react-router-dom"
import PrivateRoute from "./utilities/PrivateRoute"

function App() {

  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
    <div className="app-container">
      <div className="content-wrapper">
        <Header />
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/about" component={About}/>
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        <PrivateRoute exact path="/add" component={AddExercise}/> 
        <Route exact path="/recover" component={RecoverPassword}/>
      </div>
      <Footer/>
    </div>
     
    </MuiPickersUtilsProvider>
  );
}

export default App;
