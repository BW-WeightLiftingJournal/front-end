import React, { useEffect } from "react";
import {connect} from "react-redux"
import {handleChange, login, resetErrors} from "../utilities/actions"
import {Link} from "react-router-dom"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Register = ({
  history, 
  error, 
  login, 
  registerCredentials, 
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
      <h2>Sign up below</h2>
      {error ? <div style={{color: 'red'}}>Error.</div> : <br/>}
      <br/>
      <form 
        noValidate 
        autoComplete="off" 
        onSubmit={(e)=>login(e, registerCredentials)}
      >
        <div className="login-form">
          <TextField
            error={!registerCredentials.username && error}
            required
            helperText={!registerCredentials.username && error && "Username Required"}
            id="outlined-required"
            label="Username"
            variant="outlined"
            name="username"
            value={registerCredentials.username}
            onChange={e=>handleChange(e, 'registerCredentials')}
          />
          <br/>
          <TextField
            error={!registerCredentials.password && error}
            required
            helperText={!registerCredentials.password && error && "Password Required"}
            type="password"
            id="outlined-required"
            label="Password"
            variant="outlined"
            name="password"
            value={registerCredentials.password}
            onChange={e=>handleChange(e, 'registerCredentials')}
          />
          <br/>
          <Button variant="outlined" type="submit">Sign up</Button>
        </div>
      </form>
      <p>Already have an account?</p>
      <Link to="/login" onClick={resetErrors}>
        <span>Log in</span>
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  registerCredentials: state.registerCredentials,
  error: state.error,
  token: state.token

})

export default connect(mapStateToProps,{handleChange, login, resetErrors})(Register);

