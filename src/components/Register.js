import React, { useEffect } from "react";
import {connect} from "react-redux"
import {handleChange, register} from "../utilities/actions"
import {Link} from "react-router-dom"

const Register = ({
  history, 
  error, 
  register, 
  registerCredentials, 
  handleChange, 
  token
  }) => {



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
        <form onSubmit={(e)=>register(e, registerCredentials)}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={registerCredentials.username}
            onChange={e=>handleChange(e, 'registerCredentials')}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={registerCredentials.password}
            onChange={e=>handleChange(e, 'registerCredentials')}
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
  registerCredentials: state.registerCredentials,
  error: state.error,
  token: state.token

})

export default connect(mapStateToProps,{handleChange, register})(Register);

