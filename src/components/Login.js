import React, { useEffect } from "react";
import {connect} from "react-redux"
import {handleChange, login, resetErrors, resetForm} from "../utilities/actions"
import {Link} from "react-router-dom"
import {FaDumbbell} from 'react-icons/fa'
import {CircularProgress, FormControlLabel } from '@material-ui/core'
import {StyledButton, GrayCheckbox, GrayTextField} from "../utilities/styles"


const Login = ({
  history, 
  error, 
  login, 
  loginCredentials, 
  handleChange,
  resetErrors,
  isLogging,
  resetForm,
  loggedIn
  }) => {
    
  useEffect(()=>{
    resetErrors()
    // eslint-disable-next-line
  },[])

  useEffect(()=> {
    if(!!loggedIn){
      history.push('/Dashboard')
      resetForm('loginCredentials')
    }
    // eslint-disable-next-line
  } ,[loggedIn])

  return (
    <div className="login-container">
      <FaDumbbell style={{fontSize: '4rem'}}/>
      <h2>Sign In</h2>
      {error ? <div style={{color: 'red'}}>{error}</div> : <br/>}
      <br/>
      <form 
        noValidate 
        autoComplete="off" 
        onSubmit={(e)=>{
          login(e, loginCredentials)
        }}
      >
        <div className="login-form">
          <GrayTextField
            disabled = {isLogging}
            error={error}
            required
            helperText={!loginCredentials.username && error && "Username Required"}
            label="Username"
            variant="outlined"
            name="username"
            value={loginCredentials.username}
            onChange={e=>handleChange(e, 'loginCredentials')}
          />
          <br/>
          <GrayTextField
            disabled = {isLogging}
            error={error}
            required
            helperText={!loginCredentials.password && error && "Password Required"}
            type="password"
            label="Password"
            variant="outlined"
            name="password"
            value={loginCredentials.password}
            onChange={e=>handleChange(e, 'loginCredentials')}
          />
          <br/>
          <FormControlLabel
            value="remember me"
            control={<GrayCheckbox/>}
            label="Remember me"
            labelPlacement="end"
          />
          <StyledButton variant="outlined" type="submit">{isLogging ? <CircularProgress size={25} style={{color: 'white'}}/> : 'Sign In'}</StyledButton>
          <div className="below-button">
            <Link to="/recover">
              Forgot password?
            </Link>
            <div style={{textAlign: 'right'}}>
              <p>Don't have an account?</p>
              <Link to="/register" onClick={resetErrors}>
                <span style={{textTransform: 'uppercase'}}>Sign up</span>
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
  isLogging: state.isLoggingIn,
  loggedIn: state.loggedIn

})

export default connect(mapStateToProps,{handleChange, login, resetErrors, resetForm})(Login);


