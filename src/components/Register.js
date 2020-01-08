import React, { useEffect } from "react";
import {connect} from "react-redux"
import {handleChange, register, resetErrors, login, resetForm} from "../utilities/actions"
import {Link} from "react-router-dom"
import CircularProgress from '@material-ui/core/CircularProgress';
import {FaDumbbell} from 'react-icons/fa'
import {BlackButton, GrayTextField} from "../utilities/styles"

const Register = ({
  history, 
  error, 
  register,
  login,
  registerCredentials, 
  handleChange, 
  token,
  resetErrors,
  isRegister
  }) => {

  useEffect(()=>{
    resetErrors()
    // eslint-disable-next-line
  },[])

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
      {error ? <div style={{color: 'red'}}>{error}</div> : <br/>}
      <br/>
      <form 
        noValidate 
        autoComplete="off" 
        onSubmit={(e)=>{
          register(e, registerCredentials)
          resetForm('registerCredentials')
        }}
      >
        <div className="login-form">
          <GrayTextField
            error={!registerCredentials.email && error}
            required
            helperText={!registerCredentials.email && error && "Email Required"}
            label="Email"
            variant="outlined"
            name="email"
            value={registerCredentials.email}
            onChange={e=>handleChange(e, 'registerCredentials')}
          />
          <br/>
          <GrayTextField
            error={!registerCredentials.username && error}
            required
            helperText={!registerCredentials.username && error && "Username Required"}
            label="Username"
            variant="outlined"
            name="username"
            value={registerCredentials.username}
            onChange={e=>handleChange(e, 'registerCredentials')}
          />
          <br/>
          <GrayTextField
            error={!registerCredentials.password && error}
            required
            helperText={!registerCredentials.password && error && "Password Required"}
            type="password"
            label="Password"
            variant="outlined"
            name="password"
            value={registerCredentials.password}
            onChange={e=>handleChange(e, 'registerCredentials')}
          />
          <br/>
          <BlackButton variant="outlined" type="submit">{isRegister ? <CircularProgress size={25} style={{color: 'white'}}/> : 'Create Account'}</BlackButton>
          <div>
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
  isRegister: state.isRegistering

})

export default connect(mapStateToProps,{handleChange, register, login,resetErrors})(Register);

