import React, { useEffect } from "react";
import {connect} from "react-redux"
import {handleChange, login, resetErrors} from "../utilities/actions"
import {Link} from "react-router-dom"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';
import {FaDumbbell} from 'react-icons/fa'
import {BlackButton} from "../utilities/styles"

const Register = ({
  history, 
  error, 
  login, 
  registerCredentials, 
  handleChange, 
  token,
  resetErrors,
  isRegister
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
      <FaDumbbell style={{fontSize: '4rem', color: '#F26363'}}/>
      <h2>Sign Up</h2>
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
          <BlackButton variant="outlined" type="submit">{isRegister ? <CircularProgress size={25}/> : 'Create Account'}</BlackButton>
          <div style={{textAlign: 'right'}}>
            <p>Already have an account?</p>
            <Link to="/login" onClick={resetErrors}>
              <span style={{textTransform: 'uppercase'}}>Sign in</span>
            </Link>
          </div>
        </div>
        
      </form>
      
      
    </div>
  );
};

const mapStateToProps = state => ({
  registerCredentials: state.registerCredentials,
  error: state.error,
  token: state.token,
  isRegister: state.isRegister

})

export default connect(mapStateToProps,{handleChange, login, resetErrors})(Register);

