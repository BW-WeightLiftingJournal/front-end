import React, { useEffect } from "react";
import {connect} from "react-redux"
import {handleChange, register, resetCredentials} from "../utilities/actions"
import {Link} from "react-router-dom"

const Register = ({
  history, 
  error, 
  register, 
  credentials, 
  handleChange, 
  token,
  resetCredentials
  }) => {

  useEffect(()=> {
    resetCredentials()
    // eslint-disable-next-line
  }, [])

  useEffect(()=> {
    if(!!token){
      localStorage.setItem('token', token);
      history.push('/Dashboard')
    }
    // eslint-disable-next-line
  } ,[token])

  return (
    <>
       <h2>Sign up below</h2>
        {error && <div style={{color: 'red'}}>Error.</div>}
        <form onSubmit={(e)=>register(e, credentials)}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={e=>handleChange(e, 'credentials')}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={e=>handleChange(e, 'credentials')}
          />
          <button>Log in</button>
        </form>
        <p>Already have an account?</p>
        <Link to="/login">
          <span>Login</span>
        </Link>
    </>
  );
};

const mapStateToProps = state => ({
  credentials: state.credentials,
  error: state.error,
  token: state.token

})

export default connect(mapStateToProps,{handleChange, register, resetCredentials})(Register);

