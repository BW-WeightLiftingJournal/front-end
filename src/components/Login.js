import React, { useEffect } from "react";
import {connect} from "react-redux"
import {handleChange, login, resetErrors} from "../utilities/actions"
import {Link} from "react-router-dom"
import {FaDumbbell} from 'react-icons/fa'
import { Checkbox, TextField, CircularProgress, Button, FormControlLabel } from '@material-ui/core'
import {StyledButton} from "../utilities/styles"


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
      <FaDumbbell style={{fontSize: '4rem'}}/>
      <h2>Sign In</h2>
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
          <FormControlLabel
            value="remember me"
            control={<Checkbox color="primary" />}
            label="Remember me"
            labelPlacement="end"
          />
          <StyledButton variant="outlined" type="submit">{isLogging ? <CircularProgress size={25}/> : 'Sign In'}</StyledButton>
          <div className="below-button">
            <a>
              Forgot password?
            </a>
            <div style={{textAlign: 'right'}}>
              <p>Don't have an account?</p>
              <Link to="/register" onClick={resetErrors}>
                <span style={{fontTransform: 'uppercase'}}>Sign up</span>
              </Link>
            </div>
          </div>
        </div>
      </form>
      
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


