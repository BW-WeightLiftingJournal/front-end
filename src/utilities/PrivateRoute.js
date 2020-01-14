import React from "react"
import {Route, Redirect} from "react-router-dom"
import {connect} from "react-redux"

const PrivateRoute = ({ component: Component, loggedIn, ...rest  }) => (
    <Route
      {...rest}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

const mapStateToProps = state => ({
    loggedIn:state.loggedIn
})
  
export default connect(mapStateToProps,{})(PrivateRoute);