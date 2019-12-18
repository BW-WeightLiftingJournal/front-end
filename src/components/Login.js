import React, { useEffect } from "react";
import {connect} from "react-redux"
import {handleChange, login, resetCredentials} from "../utilities/actions"
import {Link} from "react-router-dom"

const Login = ({
  history, 
  error, 
  login, 
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
       <h2>Login below</h2>
        {error && <div style={{color: 'red'}}>Username or Password incorrect.</div>}
        <form onSubmit={(e)=>login(e, credentials)}>
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
        <p>Dont have an account?</p>
        <Link to="/register">
          <span>Sign up</span>
        </Link>
    </>
  );
};

const mapStateToProps = state => ({
  credentials: state.credentials,
  error: state.error,
  token: state.token

})

export default connect(mapStateToProps,{handleChange, login, resetCredentials})(Login);

