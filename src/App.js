import React from 'react';

//components import
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Register from "./components/Register"
import Landing from "./components/Landing"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AddExercise from "./components/AddExercise"

//utilities import
import {Route} from "react-router-dom"
import PrivateRoute from "./utilities/PrivateRoute"

function App() {
  return (
    <div className="app-container">
      <Header/>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      {/* <AddExercise /> */}
      <Footer/>
    </div>
  );
}

export default App;
