import React, { useEffect } from "react";
import {connect} from "react-redux"
import {handleChange, login, resetErrors} from "../utilities/actions"
import {Link} from "react-router-dom"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Login = ({
  history, 
  error, 
  login, 
  loginCredentials, 
  handleChange, 
  token,
  resetErrors
  }) => {

  useEffect(()=> {
    if(!!token){
      localStorage.setItem('token', token);
      history.push('/Dashboard')
    }
    // eslint-disable-next-line
  } ,[token])

  return (
    <div className="login-container">
      <h2>Login below</h2>
      {error ? <div style={{color: 'red'}}>Username or Password incorrect.</div> : <br/>}
      <br/>
      <form 
        noValidate 
        autoComplete="off" 
        onSubmit={(e)=>login(e, loginCredentials)}
      >
        <div className="login-form">
          <TextField
            error={error}
            required
            id="outlined-required"
            label="Username"
            variant="outlined"
            name="username"
            value={loginCredentials.username}
            onChange={e=>handleChange(e, 'loginCredentials')}
          />
          <br/>
          <TextField
            error={error}
            required
            type="password"
            id="outlined-required"
            label="Password"
            variant="outlined"
            name="password"
            value={loginCredentials.password}
            onChange={e=>handleChange(e, 'loginCredentials')}
          />
          <br/>
          <Button variant="outlined" type="submit">Login</Button>
        </div>
      </form>
      <p>Dont have an account?</p>
      <Link to="/register" onClick={resetErrors}>
        <span>Sign up</span>
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  loginCredentials: state.loginCredentials,
  error: state.error,
  token: state.token

})

export default connect(mapStateToProps,{handleChange, login, resetErrors})(Login);

