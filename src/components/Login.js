import React, { useEffect } from "react";
import {connect} from "react-redux"
import {handleChange, login, resetErrors} from "../utilities/actions"
import {Link} from "react-router-dom"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';

const Login = ({
  history, 
  error, 
  login, 
  loginCredentials, 
  handleChange, 
  token,
  resetErrors,
  isLogging
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
            helperText={!loginCredentials.username && error && "Username Required"}
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
            helperText={!loginCredentials.password && error && "Password Required"}
            type="password"
            id="outlined-required"
            label="Password"
            variant="outlined"
            name="password"
            value={loginCredentials.password}
            onChange={e=>handleChange(e, 'loginCredentials')}
          />
          <br/>
          <Button variant="outlined" type="submit">{isLogging ? <CircularProgress size={25}/> : 'Login'}</Button>
        </div>
      </form>
      <p>Don't have an account?</p>
      <Link to="/register" onClick={resetErrors}>
        <span>Sign up</span>
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  loginCredentials: state.loginCredentials,
  error: state.error,
  token: state.token,
  isLogging: state.isLogging

})

export default connect(mapStateToProps,{handleChange, login, resetErrors})(Login);

