import React, { useEffect } from "react";
import {connect} from "react-redux"
import {handleChange, register, resetErrors, resetForm} from "../utilities/actions"
import {Link} from "react-router-dom"
import CircularProgress from '@material-ui/core/CircularProgress';
import {FaDumbbell} from 'react-icons/fa'
import {BlackButton, GrayTextField} from "../utilities/styles"

const Register = ({
  history, 
  errorList, 
  register,
  registerCredentials, 
  handleChange, 
  token,
  resetErrors,
  isRegister,
  resetForm,
  loggedIn
  }) => {

  useEffect(()=>{
    resetErrors()
    // eslint-disable-next-line
  },[])

  useEffect(()=> {
    if(!!loggedIn){
      localStorage.setItem('token', token);
      history.push('/Dashboard')
      resetForm('registerCredentials')
    }
    // eslint-disable-next-line
  } ,[loggedIn])

  return (
    <div className="login-container">
      <FaDumbbell style={{fontSize: '4rem', color: '#F26363'}}/>
      <h2>Sign Up</h2>
      {!!errorList.length>0 ? <div style={{color: 'red'}}>{errorList.map((err, ind)=> <p key={ind}>{err}</p>)}</div> : <br/>}
      <br/>
      <form 
        noValidate 
        autoComplete="off" 
        onSubmit={(e)=>{
          register(e, registerCredentials)
        }}
      >
        <div className="login-form">
          {/* <GrayTextField
            disabled = {isRegister}
            error={!registerCredentials.email && !!errorList.length>0}
            required
            helperText={!registerCredentials.email && !!errorList.length>0 && "Email Required"}
            label="Email"
            variant="outlined"
            name="email"
            value={registerCredentials.email}
            onChange={e=>handleChange(e, 'registerCredentials')}
          />
          <br/> */}
          <GrayTextField
            disabled = {isRegister}
            error={!registerCredentials.username && !!errorList.length>0}
            required
            helperText={!registerCredentials.username && !!errorList.length>0 && "Username Required"}
            label="Username"
            variant="outlined"
            name="username"
            value={registerCredentials.username}
            onChange={e=>handleChange(e, 'registerCredentials')}
          />
          <br/>
          <GrayTextField
            disabled = {isRegister}
            error={!registerCredentials.password && !!errorList.length>0}
            required
            helperText={!registerCredentials.password && !!errorList.length>0 && "Password Required"}
            type="password"
            label="Password"
            variant="outlined"
            name="password"
            value={registerCredentials.password}
            onChange={e=>handleChange(e, 'registerCredentials')}
          />
          <br/>
          <BlackButton variant="outlined" type="submit">{isRegister ? <CircularProgress size={25} style={{color: 'white'}}/> : <><p className='account-show'>{`Create Account`}</p><p className='account-hide'>{`Create`}</p></> }</BlackButton>
          <div>
            <span>{"Already have an account? "}</span>
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
  errorList: state.errorList,
  token: state.token,
  isRegister: state.isRegistering,
  loggedIn: state.loggedIn

})

export default connect(mapStateToProps,{handleChange, register, resetErrors, resetForm})(Register);

